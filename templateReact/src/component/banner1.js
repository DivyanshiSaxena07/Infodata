import { Component } from "react";
import './Style.css'
export default class Banner1 extends Component{
    constructor(){
        super();
    }
    render(){
        return<div id="banner1">
           <center> <h2 style={{position: 'absolute',top: '125%',left: '50%',transform: 'translate(-50%, -50%)'}}>Order with us</h2>
           <button className="btn2">Send request</button>
           </center>
        </div>
    }
}