import React from "react";
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminder from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';

export default function Feature(){


    return (

        <div>
            <div>
                <p>Features</p>
            </div>
            <div >
                <ul>
                    <div>
                        <img src={todo}  alt="todo icon"/>
                        <li>Todo List</li>
                    </div>
                    <div>
                        <img src ={calendar} alt="calendar icon" />
                        <li>Calendar</li>
                    </div>
                    <div>
                        <img src={reminder} alt="reminders icon" />
                        <li>Reminders</li>

                    </div>
                    <div>
                        <img src={planning} alt="planning icon" />
                        <li>Planning</li>

                    </div>
                </ul>
            </div>
        </div>

    )


}