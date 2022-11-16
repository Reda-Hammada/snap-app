import './App.css';
import './components/Header.css'
import './components/Features.css';
import './components/Company.css';
import './components/Hero.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState } from 'react';

function App() {

  const [menu, setMenu] = useState(true)

  const Closemenu = () => {

    setMenu(false);
  }
 
  return (

   
    <div className="App">
      {menu ?(

      <Menu closemenu = {Closemenu}/>

      ):null}
      
      <Header />
      <Hero />
   
  
    </div>
  );
}

export default App;
