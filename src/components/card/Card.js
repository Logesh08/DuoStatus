import React from 'react';
import './CardContainer.css';

const CardContainer = () => {
    const cards = [
      { id: 0, title: 'Overall', content: '+xxXP' },
      { id: 1, title: 'Container 1', content: '+xxXP' },
      { id: 2, title: 'Container 2', content: '+xxXP' },
      { id: 3, title: 'Container 3', content: '+xxXP' },
      { id: 4, title: 'Container 4', content: '+xxXP' },
      { id: 5, title: 'Container 5', content: '+xxXP' },
    ];
  
    return (
      <div className="card-container">
        <div className='wrapper'>
            {cards.map((card) => (
            <div key={card.id} className="card">
                <div className='insider'>
                    <h3>{card.title}</h3>
                    <span>{card.content}</span>
                </div>
            </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default CardContainer;
  