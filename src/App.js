import './App.css';
import './components/Header.css'
import './components/Features.css';
import './components/Company.css';
import './components/Hero.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">

      <div className='ultimate_menu_container'>
        <div className='menu_container'>  
            <div className='close_nav_container'>
                <span>X</span>
            </div>                      
        </div>
      </div>


          <Header />
          <Hero />
   
  
    </div>
  );
}

export default App;
