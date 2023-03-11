import { Component } from "react";
import img from "../Images/img1.jpeg";
import img1 from "../Images/img2.jpg";
import img2 from "../Images/img2.webp";
import './Style.css'
export default class Main extends Component{
    constructor(){
        super();
    }
    render(){
        return<div className="container mt-5" style={{fontFamily:'cursive'}}>
            <div className="row">
                <h1 className="text-center mb-5" style={{fontFamily:'cursive'}}>Let's Plan Book Your Cake</h1>
                <div className="col md-3">
                 <img src={img} width={250} height={200}></img>
                 <h3 className="text-center">Birthday Planning</h3>
                 <button className="btn1">ORDER NOW</button>
                </div>
                <div className="col md-3">
                <img src={img1} width={250} height={200}></img>
                <h3 className="text-center">Choclate </h3>
                <button className="btn1">ORDER NOW</button>
                </div>
                <div className="col md-3">
                <img src={img2} width={250} height={200}></img>
                <h3 className="text-center">Suprices Planning</h3>
                <button className="btn1">ORDER NOW</button>
                </div>
            </div>
        </div>
    }
}