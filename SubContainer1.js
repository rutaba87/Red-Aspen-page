import React from 'react';
import { useState } from 'react';
import arrow from '../src/Images/arrow.jpg'
import ReactCardFlip from 'react-card-flip'

const SubContainer1 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlip, setIsFlip] = useState(true);

    function flip (){
      setIsFlipped(!isFlipped);
       console.log('flip')
    }

    function flipping (){
      setIsFlip(!isFlip);
      console.log("flipped")
    }
  
  return (
    <div class="dashboard">
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
  <div class="box">
    <div className='box--nav'>
    <h3>Units</h3>
    <img src={arrow} alt='arrow' onClick={flip}></img>
    </div>
    <div class="box-content">
      <div className='unitLeft'> 
      <div class="box-item">
        <p>Picked</p>
        <span class="number-1">0</span>
      </div>
      <div class="box-item">
        <p>Packed</p>
        <span class="number-2">0</span>
      </div>
      <div class="box-item">
        <p>Shipped</p>
        <span class="number-3">0</span>
      </div>
      </div>
      <div className='unitRight'>
      <div class="box-item">
        <p>Units Shipped Yesterday</p>
        <span class="number-4">0</span>
      </div>
      <div class="box-item">
        <p>Units in Queue</p>
        <span class="number-5">16759</span>
      </div>
      </div>
    </div>
  </div>
 
  <div class="box">
  <div className='box--nav'>
    <h3>Orders</h3>
    <img src={arrow} alt='arrow' onClick={flip}></img>
    </div>
    <div class="box-content">
      <div className='unitLeft'>
      <div class="box-item">
        <p>Picked</p>
        <span class="number-1">0</span>
      </div>
      <div class="box-item">
        <p>Packed</p>
        <span class="number-2">0</span>
      </div>
      <div class="box-item">
        <p>Shipped</p>
        <span class="number-3">0</span>
      </div>
      </div>
      <div className='unitRight'>
      <div class="box-item">
        <p>Orders Shipped Yesterday</p>
        <span class="number-4">0</span>
      </div>
      <div class="box-item">
        <p>Orders in Queue</p>
        <span class="number-5">3645</span>
      </div>
      </div>
    </div>
  </div>
  </ReactCardFlip>



  <ReactCardFlip flipDirection='horizontal' isFlipped={isFlip}>
  <div class="box">
  <div className='box--nav'>
    <h3>Units</h3>
    <img src={arrow} alt='arrow' onClick={flipping}></img>
    </div>
    <div class="box-content">
      <div className='unitLeft'>
      <div class="box-item">
        <p>Picked</p>
        <span class="number-1">0</span>
      </div>
      <div class="box-item">
        <p>Packed</p>
        <span class="number-2">0</span>
      </div>
      <div class="box-item">
        <p>Shipped</p>
        <span class="number-3">0</span>
      </div>
      </div>
      <div className='unitRight'>
      <div class="box-item">
        <p>Orders Shipped Yesterday</p>
        <span class="number-4">0</span>
      </div>
      <div class="box-item">
        <p>Orders in Queue</p>
        <span class="number-5">3645</span>
      </div>
      </div>
    </div>
  </div>

  <div class="box">
    <div className='box--nav'>
    <h3>Orders</h3>
    <img src={arrow} alt='arrow' onClick={flipping}></img>
    </div>
    <div class="box-content">
      <div className='unitLeft'> 
      <div class="box-item">
        <p>Picked</p>
        <span class="number-1">0</span>
      </div>
      <div class="box-item">
        <p>Packed</p>
        <span class="number-2">0</span>
      </div>
      <div class="box-item">
        <p>Shipped</p>
        <span class="number-3">0</span>
      </div>
      </div>
      <div className='unitRight'>
      <div class="box-item">
        <p>Units Shipped Yesterday</p>
        <span class="number-4">0</span>
      </div>
      <div class="box-item">
        <p>Units in Queue</p>
        <span class="number-5">16759</span>
      </div>
      </div>
    </div>
  </div>
  </ReactCardFlip>
</div>

  )
}

export default SubContainer1;