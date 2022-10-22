import React,{useState} from 'react'

function Features() {

  const [toggle,setToggle] = useState(false);

  return (
    <div className='Features_container'>
        <p>Features </p>
        <div>
         {toggle ?(

          <ul>
            <li>hahah</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
         )
         :null}
        </div>
    </div>
  )
}

export default Features