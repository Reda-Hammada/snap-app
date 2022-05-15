import React, {Component} from 'react';
import './company.css';

class Make extends Component {

    state = {

        showCompany: false
    }

    onShowToggle = () => {

        this.setState({showCompany: !this.state.showCompany})
        console.log("it worked succsefully to change the toggle state");
    }
    render(){

        return(
        
            <div>
            <p onMouseOut={this.onShowToggle}>Comapany</p>
            {this.state.showCompany ?(
            <div className="listCompany">
                <ul>
                    <li>History</li>
                    <li>Our team</li>
                    <li>Blog</li>
                </ul>
            </div> 
              ): null}
        </div>
        
        )
    }
}

export default Make;