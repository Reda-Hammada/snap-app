import React,{useState} from 'react'

function Company() {

  const [toggle,setToggle] = useState(false);


  const Toggle = () => {
    
    setToggle(!toggle);

  }



   return (

    <div className='company_container'>
      <p onMouseOver={Toggle}
      >Company</p>
      {
        toggle ?(
    <div className='company_list_container'>
      <ul>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>

    ):null}

    </div>
  
    )
}

export default Company