import React,{useState, useEffect, useRef} from 'react'
import {FiMenu} from "react-icons/fi";
import {Link} from 'react-router-dom'


const Navbar = ()=>{
    const[toggle, setToggle] = useState(false)

    return(
        <nav className = 'nav-div'>
         <div className = 'nav-header'>
         <Link to = '/'> <button className = 'Holiday-btn'>Holiday</button></Link>
           <button className = 'toggle-btn' onClick = {()=>setToggle(!toggle)}> <FiMenu/></button>
          <div className = 'nav-menu'>
           <Link to  = '/location/Paris'><button className = 'nav-btn'>Holiday-plan </button></Link>
           <Link to = '/Hotel'><button className = 'nav-btn'>Hotel </button></Link>
         
      
         </div>

         <div className ={toggle ? 'nav-container show-container ' : 'nav-container '}>
          <div className = 'nav-buttons'>
         <div className = {toggle? 'nav-item1': 'nav-container'}> 
            <Link to  = '/location/Paris'><button className = 'nav-btn'>Holiday-plan </button></Link>
         </div>
         <div className =  {toggle? 'nav-item2': 'nav-container'}>
           <Link to = '/Hotel'><button className = 'nav-btn'>Hotel </button></Link>
         </div>
          </div>
         </div>
         </div>
           
        </nav>
    )
}
export default Navbar