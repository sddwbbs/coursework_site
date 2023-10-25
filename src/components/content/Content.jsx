import React from 'react';
import Lottie from 'react-lottie'; 
import { useState } from 'react'
import './Content.css';
import animationData from '../../assets/web-designer-with-idea.json'; 

function Content() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  return (
    <div className="container">
        <div className={toggle === 1 ? "content__show" : "content"}>
            <Lottie options={defaultOptions} height={700} width={700} />
        </div>
        <div className={toggle === 2 ? "content__show" : "content"}>
            
        </div>
        <div className={toggle === 3 ? "content__show" : "content"}>
            
        </div>
    </div>
  );
}

export default Content;
