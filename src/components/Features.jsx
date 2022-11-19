import React,{useState} from 'react'
import Todo from '../images/icon-todo.svg'
import Calendar from '../images/icon-calendar.svg'
import Reminders from '../images/icon-reminders.svg'
import Planning from '../images/icon-planning.svg'

function Features() {

  const [toggle,setToggle] = useState(false);

  const Toggle = () => {
    
    setToggle(!toggle);

  

  }

 
  return (
    <div className='Features_container'>
        <p onMouseOver={Toggle}
           >Features</p>
        { toggle ?(
        <div  className='features_list_container'>
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
        </div>

         )
         :null}
    </div>
  )
}

export default Features