import './App.css';
import CardContainer from './components/card/Card';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardContainer/>
      <Footer/>
    </div>
  );
}

export default App;
