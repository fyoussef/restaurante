
import './App.css';
import Home from './components/Home';
import Food from './components/Food';
import Drinks from './components/Drink';
import { DrinkProvider } from './DrinkContext';


function App() {

  return (
    <>

    <Home />
    
    < Food />

    <DrinkProvider>
      < Drinks />
    </DrinkProvider>
    
    </>
  
  );
}

export default App;
