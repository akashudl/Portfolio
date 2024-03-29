import React, { useState } from 'react'
import "./Work.scss"
export default function Works() {
  const [currentSlider,setcurrentSlider]=useState(0);
    const data = [
    {
      id: "1",
      icon: "./assert/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assert/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assert/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handelClick=(way)=>{
    way === "left"
    ? setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
    : setcurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 : 0);

  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
       { data.map((d)=>(<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftcontainer">
                <div className="imgcontainer">
                  <img src={d.icon}alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
            <img
                  src={d.img}
                  alt=""
                />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assert/arrow.png" className="arrow left" alt="" onClick={()=>handelClick("left")}/>
      <img src="assert/arrow.png"    className="arrow right" alt="" onClick={()=>handelClick()}/>
    </div>
  )
}
