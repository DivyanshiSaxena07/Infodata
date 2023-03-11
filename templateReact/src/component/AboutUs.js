import { Component } from "react";
import img from '../Images/img4.webp'
import img1 from '../Images/img.jpg'
import './Style.css';
export default class About extends Component{
    constructor(){
        super();
    }
    render(){
        return<div id="about" className="container-fluid">
            <div className="container">
  <div className="row">
    <div className="col md-6 mt-5">
        <h6 style={{color:'#cbb9a6',textTransform:'uppercase',fontFamily:'PTSerif'}}>ABOUT US</h6>
        <h2 style={{fontFamily:'cursive'}}>We Plan & Design Weddings
That Capture the Imagination</h2>
<img className="mt-5 mb-5" src={img}></img>
<p style={{color:'#a3ad6f',fontSize:'15px'}}>

Weddings are significant events in people’s lives and as such, couples are often willing to spend considerable amount of money to ensure that their weddings are well-organized. Wedding planners are often used by couples who work long hours and have little spare time available for sourcing and managing wedding venues.
more about us</p>
<button className="btn4"> MORE ABOUT Us</button>
    </div>
    <div className="col md-6 mt-5">
<img src={img1} width={500} height={500}></img>
    </div>

  </div>
        </div>
        </div>
    }
}