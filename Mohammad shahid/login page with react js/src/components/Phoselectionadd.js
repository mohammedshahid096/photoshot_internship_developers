import React from 'react'
import HumanLogo from '../photos/human.png';

export default function Phoselectionadd() {
  return (
    
   
    <div className="col-md-5 offset-sm-1" styl="background-color: #211;">
    <h1 id="selectionheading" className="pl-5">Photo selection
        <p>Select your album photos just with one click</p>
    </h1>
    <div>
        <div className="rectangle"></div>
        <div className="rectangle" style={{backgroundColor:"#211"}}></div>
        <div className="rectangle" style={{backgroundColor:"#332"}}></div>
        <div><img src={HumanLogo} alt="human"/></div>
     </div>
 </div>

  )
}
