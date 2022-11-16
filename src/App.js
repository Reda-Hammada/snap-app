import './App.css';
import './components/Header.css'
import './components/Features.css';
import './components/Company.css';
import './components/Hero.css';
import Todo from '../src/images/icon-todo.svg'
import Calendar from '../src/images/icon-calendar.svg'
import Reminders from '../src/images/icon-reminders.svg'
import Planning from '../src/images/icon-planning.svg'
import Header from './components/Header';
import Hero from './components/Hero';
import { useState } from 'react';

function App() {

  const [feature,setFeature] = useState(false);
  const [company, setCompany] = useState(false);

  const Feature = () => {
    
    setFeature(!feature);

  }

  const Company = () => {

    setCompany(!company)
  }
  return (
    <div className="App">

      <div className='ultimate_menu_container'>
        <div className='menu_container'>  
            <div className='close_nav_container'>
                <span>X</span>
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
      </div>


          <Header />
          <Hero />
   
  
    </div>
  );
}

export default App;
