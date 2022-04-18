
import Topbar from "./Component/Topbar/Topbar.jsx"
import Intro from "./Component/Intro/Intro"
import Portfolio from "./Component/Portfolio/Portfolio"
import Works from "./Component/Works/Works"
import  Testimonial from "./Component/Testimonial/Testimonial"
import Contact from "./Component/Contact/Contact"
import Menu from "./Component/Menu/Menu"
import './app.scss'
import {useState} from 'react';
function App() {
  const [menuopen,setMenuopen]=useState(true)
  return (
    <div className="app">
     <Topbar menuOpen={menuopen} setMenuopen={setMenuopen}/>
     <Menu  menuOpen={menuopen} setMenuopen={setMenuopen}/>
     <div className="sections">
  
        <Intro/>
        
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
     </div>
    </div>
  );
}

export default App;
