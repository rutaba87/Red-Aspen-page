import React, { useState } from 'react'
import squareBracketIcon from '../src/Images/squareBracketIcon.png'
import './App.css'

const Container = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
       setIsFullScreen(true);
       console.log("success")
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
        console.log("success exit")
      }
    }
  };

  return (
    <div className='container-row'>
     <div className='left'>
         <h5>Home</h5>
          <h3>Dashboard</h3>
     </div>
     <div className='right'>
        <div className='circle-red'> To Do </div>
        <div className='circle-blue'> In Progress </div>
        <div className='circle-green'> Done </div>
     </div>
     <div className='overlayuu' onClick={toggleScreen}
     style={
      {
        position: 'absolute', backgroundColor: 'white', display: 'flex', alignItems: 'center', right: 0, cursor: 'pointer', transitionBehavior: 'allow-discrete', transitionDelay: "2500ms", transitionTimingFunction: "ease-in"
      }
     }>
        <div className='img-overlay'>
         <img src={squareBracketIcon} alt='squareBracketIcon'/>
        </div>
         <div className='text-overlay'>
           <p id='click' className='text-overlay'> 
             { isFullScreen ? "Exit full screen" : "Full Screen"}
           </p>
         </div>
     </div>

    </div>
  )
}

export default Container;