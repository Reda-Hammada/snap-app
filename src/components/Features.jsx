import React,{useState} from 'react'
import Todo from '../images/icon-todo.svg';
import Calendar from '../images/icon-calendar.svg';
import Reminders from '../images/icon-reminders.svg';
import Planning from '../images/icon-planning.svg';

function Features() {

  const [toggle,setToggle] = useState(false);

  const show = ()=>{

    setToggle(!toggle);

  }

  const hide = () => {

    setToggle(!toggle);
  }

  





  return (
    <div className='Features_container'>
        <p onMouseOver={show}
           onMouseOut={hide}>Features</p>

        <div className='features_list_container'>
         {toggle ?(

          <ul>
            <li>
              <img src={Todo} alt={'todo icon'} />
              Todo List
            </li>
            <li>
            <img src={Calendar} alt={'todo icon'} />
            Calendar
            </li>
            <li>
            <img src={Reminders} alt={'todo icon'} />
               Reminders
            </li>
            <li>
            <img src={Planning} alt={'todo icon'} />
              Planning
            </li>
          </ul>
         )
         :null}
        </div>
    </div>
  )
}

export default Features