import React,{Component} from 'react';
import hero from './images/image-hero-desktop.png';
import databiz from './images/client-databiz.svg';
import audiophile from './images/client-audiophile.svg';
import maker from './images/client-maker.svg';
import meet from './images/client-meet.svg';

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
            },

            p:{
                color:"hsl(0, 0%, 41%)",
                fontSize:"1.4rem",
                textJustify:"start"
            },

            button:{

                borderRadius: "10px",
                border:"1px solid black",
                backgroundColor:"black",
                color:"#fff",
                width:"140px",
                height:"50px",
                fontWeight:"bolder",
                fontSize:"1rem",
                cursor:"pointer"
                
    
            },

            brands:{
                 
                display:"flex",
                justifyContent:"space-between",
                width:"100%",
                marginTop:"10%"
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
                        <p style={style.child1.p}>
                            Get your team in sync, no matter your location. <br />
                            Streamline processes, create team rituals, and <br />
                            watch productivity soar.
                        </p>
                   </div>
                   <div>
                        <button style={style.child1.button}>
                            Learn More
                        </button>
                   </div>
                   <div style={style.child1.brands}>
                        <img src={databiz} alt="databiz" />
                        <img src={meet} alt="meet" />
                        <img src={maker} alt="maker" />
                        <img src={audiophile} alt="audiophile" />

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