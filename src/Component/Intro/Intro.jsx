import React,{useEffect,useRef} from 'react'
import "./Intro.scss"
import { init } from 'ityped'
export default function Intro() {
  const texref=useRef()
useEffect(()=>{
  
  init(texref.current, 
    { showCursor: true,
      backDelay:1500, 
      backspeed:60,
      strings: ['Developer','Designer'] })
},[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assert/akash.jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Akash Pandit</h1>
          <h3><span ref={texref}></span></h3>
        </div>
        <a href="#portfolio">
        <img src="assert/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
