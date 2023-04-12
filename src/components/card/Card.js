import React, { useState, useEffect } from "react";
import './CardContainer.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const CardContainer = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      const dbRef = ref(database, 'containers/');
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        const newCards = [];
        let total = 0;
  
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            const span = document.getElementById(`changable-${key.slice(-1)}`);
            if(span){
              const originalColor = 'white';
              const newValue = `+${data[key].xp} XP`;
              if (span.innerHTML !== newValue) {
                span.style.color = 'greenyellow';
                span.style.fontWeight = 'bold';
                setTimeout(() => {
                  span.style.color = originalColor;
                  span.style.fontWeight = "normal";
                }, 2000);
              }
            }
            
            newCards.push({
              id: key.slice(-1),
              title: key,
              content: `+${data[key].xp} XP`,
              failed: data[key].failed
            });
            total += data[key].xp;
          }
        }
        const span = document.getElementById(`changable-0`);
        if(span){
          const originalColor = 'white';
          const newValue = `+${total} XP`;
          if (span.innerHTML !== newValue) {
            span.style.color = 'greenyellow';
            span.style.fontWeight = 'bold';
            setTimeout(() => {
              span.style.color = originalColor;
              span.style.fontWeight = "normal";
            }, 2000);
          }
        }
        newCards.unshift({
            id: 0,
            title: 'Overall Total',
            content: `+${total} XP`
        });
        setCards(newCards);
      });
    }, []);
  
    return (
      <div className="card-container">
        <div className='wrapper'>
            {cards.map((card) => (
            <div key={card.id} className="card">
                <div className='insider'>
                    <h3>{card.title}</h3>
                    <span id={`changable-${card.id}`}>{card.content}</span>
                </div>
            </div>
            ))}
        </div>
      </div>
    );
  };
  
export default CardContainer;
  