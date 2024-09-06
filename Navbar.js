import React from 'react'
import RedAspenImg from '../src/Images/RedAspenImage.png'

const Navbar = () => {
  return (
    <div className='RedAspenNav'>
     
<img src={RedAspenImg} alt= 'RedAspenImg'></img>
<div className='nav--left'>

<div className='RedAspenUser'> 
 
<h3>rutabashamshad</h3>

<span className='span'>
<p>redaspen-s</p>
<select className='RedAspenSelect'>
    <option>  </option>
    <option> ABC </option>
    <option>XYZ</option>
</select> 
</span>
</div>
</div>
    </div>
  )
}
export default Navbar;