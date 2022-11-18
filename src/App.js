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

  const [menu, setMenu] = useState(false)

  
 
  const fadeIn = () => {

    let navMenu = document.querySelector('#menu_container');
    console.log(navMenu);
    let menuContainer =  document.querySelector('#ultimate_menu_container');
        console.log(menuContainer);
      navMenu.classList.remove('change_menu_container')
      navMenu.classList.add('menu_container')
      menuContainer.classList.remove('change_ultimate_container')
      menuContainer.classList.add('ultimate_menu_container')

  }
  const Closemenu = () => {
    fadeIn();
  
    if(fadeIn()){
      
      setMenu(false)

    }

  }

  const fadeOut = () => {

    let navMenu = document.querySelector('#menu_container');
    console.log(navMenu);
    let menuContainer =  document.querySelector('#ultimate_menu_container');
    console.log(menuContainer);


    navMenu.classList.remove('menu_container')
    navMenu.classList.add('change_menu_container')
    menuContainer.classList.remove('ultimate_menu_container')
    menuContainer.classList.add('change_ultimate_container')
  }
 
  const Showmenu = () => {
    setMenu(true);
     fadeOut();     
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
