import React,{Component} from 'react';
import hero from './images/image-hero-desktop.png';


class Herosection extends Component {

    render(){

        const style = {

         parent :{

            display:"flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            width:"100%",
            marginLeft:"10%",
            marginRight:"10%",
            marginTop:"4%",

            },
        
        child1 :{

            display:"flex",
            flexDirection:'column',
            alignItems:'space-evenly',
            width:"40%",

            h1:{

                fontSize:"5rem"
            }
        },

        child2: {

            width:"40%",
            img:{
                width:"65%"
                
            }
        }
        }

        return(

            <section style={style.parent}>
                <div  style={style.child1}>
                  <div >
                        <h1 style={style.child1.h1}>
                            Make <br />
                            remote Work
                        </h1>
                   </div>
                   <div>
                        <p>
            
                        </p>
                   </div>
                   <div>
                        <button>
                            Learn More
                        </button>
                   </div>
    
                 
                </div>
               
                <div style={style.child2}>
                        <img style={style.child2.img} src ={hero}   alt="hero section" />
                </div>
            </section>
    
         )
    
    }
}

export default Herosection;