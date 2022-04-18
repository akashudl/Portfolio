import React from 'react'
import { FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./Topbar.scss"
export default function Topbar(
  {menuOpen,setMenuopen}
) {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className='wrapper'>
        <div className="left">
         <a href="#intro" className="logo">AKP.</a> 
         <div className="itemContainer">
                <FaUserAstronaut className="icon"/>
                <span>+91 9614032039</span> 
         </div>
         <div className="itemContainer">
                <MdEmail className="icon" />
                <span>akashudl50@gmail.com</span> 
         </div>
        </div>
        
         <div className="right">
         <div className="hamburger" onClick={()=>setMenuopen(!menuOpen)}>
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
         </div>
         </div>
      </div>

    </div>
  )
}
