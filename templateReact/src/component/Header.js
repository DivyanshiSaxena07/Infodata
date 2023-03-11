import { Component } from "react"
import './Style.css';
export default class Header extends Component{
constructor(){
    super();
}
render(){
    return<div className="row" id="header">
   <div  className="col md-5 text-right "> <h1>Cake Delicious</h1></div>
    <div style={{letterSpacing:'1px',fontFamily: "PTSerif",textTransform:"uppercase"}} className="col md-4 text-center mx-3"><span>Home</span>
    <span className="mx-3">About</span>
    <span className="mx-3">Services</span>
    <span className="mx-3">Contact</span>
    </div>
    </div>
    
}
}