import './App.css';
import './components/Header.css'
import './components/Features.css';
import './components/Company.css';
import './components/Hero.css';
import './components/Menu.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState } from 'react';

function App() {

  const [menu, setMenu] = useState(false)

  const Closemenu = () => {

     setMenu(false);
     
     const navMenu = document.getElementById('menu_container');
     const menuContainer =  document.getElementById('ultimate_menu_container');
 
       navMenu.classList.remove('change_menu_container')
       navMenu.classList.add('menu_container')
       menuContainer.classList.remove('change_ultimate_container')
       menuContainer.classList.add('ultimate_menu_container')


    
  }

  const Showmenu = () => {

    setMenu(true);
    const navMenu = document.getElementById('menu_container');
    const menuContainer =  document.getElementById('ultimate_menu_container');

      navMenu.classList.remove('.menu_container')
      navMenu.classList.add('change_menu_container')
      menuContainer.classList.remove('ultimate_menu_container')
      menuContainer.classList.add('change_ultimate_container')
      console.log(menuContainer);
  
  }
 
  return (

   
    <div className="App">
      {menu ?(

      <Menu closemenu = {Closemenu}/>

      ):null}
      
      <Header showmenu = {Showmenu} />
      <Hero />
   
  
    </div>
  );
}

export default App;
