import React,{Component} from 'react';
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminder from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';
import './features.css';

class Features extends Component{

    state = {

        showFeature: false
    }

    onShowToggle = () =>{

        this.setState({showFeature: !this.state.showFeature});
     

    }
   
    render(){


        const iconList = {

            display: "flex",
        }

        return (

            <div>
                <div>
                    <p className='feature' onMouseOut ={this.onShowToggle}>Features</p>
                </div>
                {this.state.showFeature ?(
                <div className= "featureContainer" >
                    <ul>
                        <div style={iconList}>
                            <img src={todo}  alt="todo icon"/>
                            <li>Todo List</li>
                        </div>
                        <div style={iconList}>
                            <img src ={calendar} alt="calendar icon" />
                            <li>Calendar</li>
                        </div>
                        <div style={iconList}>
                            <img src={reminder} alt="reminders icon" />
                            <li>Reminders</li>

                        </div>
                        <div style={iconList}>
                            <img src={planning} alt="planning icon" />
                            <li>Planning</li>

                        </div>
                    </ul>
                    
                    
                    
                </div> 
                 ) : null}


            </div>

       )

    }

} 




export default Features;

