import { Component } from "react"
import img from "../Images/img4.webp"
import './Style.css';
export default class Contact extends Component {
  constructor() {
    super();
  }
  render() {
    return <div classNameName="container-fluid" style={{ backgroundColor: 'white' }}>


      <center>
        <h1 className="mt-5" style={{ fontFamily: 'cursive' }}>Give Us a Feedback</h1>
        <h5 className="mt-5 mb-5" style={{ fontFamily: 'PTSerif' }}>Contact Form</h5>
        <img src={img}></img>
        <form style={{width:'30%',height:'20%'}}>
          <div className="form-group mt-5">
            <label for="formGroupExampleInput">Email</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email..." />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Another label</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
          </div>
        </form>
      </center>
    </div>
  }
}