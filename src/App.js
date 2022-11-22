import './App.css';
import './components/Header.css';
import './components/Features.css';
import './components/Company.css';
import './components/Hero.css';
import './components/Menu.css'
import Menu from './components/Menu';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState,useEffect } from 'react';


function App() {

  const [menu, setMenu] = useState(false)

  const fadeIn = () => {

    let navMenu = document.querySelector('#menu_container')
    navMenu.classList.remove('change_menu_container')
    navMenu.classList.add('menu_container')
    // menuContainer.classList.add('ultimate_menu_container')

  }

  const closeMenu = () =>{

    fadeIn();

    if(fadeIn()){

      setMenu(false)

    }

  }
  
  const fadeOut = () => {

    let navMenu = document.querySelector('#menu_container')
    navMenu.classList.remove('menu_container')
    navMenu.classList.add('change_menu_container')
    

  }
 
  const showMenu = () => {

        if(menu === false){
        setMenu(true)
        fadeOut()
        }
  
  }

  useEffect(()=>{

    closeMenu();
  },[menu])

  useEffect(()=>{

    showMenu();
    
  },[menu])


  return(
    <div className="App">

      {menu ?(

        <Menu  menu ={menu} closeMenu={closeMenu}/>

        )
        :null}
        
        <Header menu ={menu} showMenu={showMenu}/>
        <Hero />
    
  
    </div>
  );
}

export default App;
