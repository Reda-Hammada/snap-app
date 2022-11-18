import React from 'react'
import { useState } from 'react'
import './Menu.css'
import Todo from '../images/icon-todo.svg'
import Calendar from '../images/icon-calendar.svg'
import Reminders from '../images/icon-reminders.svg'
import Planning from '../images/icon-planning.svg'

function Menu(props) {

  const [feature,setFeature] = useState(false)
  const [company, setCompany] = useState(false)

  const Feature = () => {
    
    setFeature(!feature);
     

  } 

  const Company = () => {

    setCompany(!company)
  }
  return (

    <React.Fragment >
        <div id='ultimate_menu_container' className='ultimate_menu_container'>
            
        </div>
        <div id='menu_container' className='menu_container'>  
            <div className='close_nav_container'>
                <span onClick={props.closemenu}>X</span>
            </div> 
           <div className='menu_list'>
            <div className='features'>
                <h3 onClick={Feature}>Features</h3>
                {feature ?(
                  
                  <ul>
                  <li>
                    <img src={Todo} alt={'todo icon'} />
                    <span>Todo list</span>
                  </li>
                  <li>
                  <img src={Calendar} alt={'todo icon'} />
                  <span>Calendar</span>
                  </li>
                  <li>
                  <img src={Reminders} alt={'todo icon'} />
                    <span>Rminders</span>
                  </li>
                  <li>
                  <img src={Planning} alt={'todo icon'} />
                    <span>Planning</span>
                  </li>
                </ul>
             

                ):null}
             </div>
            
             <div className='company'>
              <h3 onClick={Company}>Company</h3>
              {company ?(
              <ul>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
              ):null}
             </div>      
          </div>              
        </div>
    </React.Fragment>
    

            
  
)

}


export default Menu;