import { Component } from "react";
import data from "./data.js";
export default class Input extends Component{
    constructor(){
        super();
        this.state={
                student:data,
                yearList:['All',2019,2020,2021,2022],
                branchList:['All','CS','IT','EC'],
                selectedBranch:'All',
                selectedYear:'All',
                warning:false,
                roll:'',
                branch:"",
                name:"",
                yearList:'',
                arr:[0,0,0,0]
        }
    }
    handle=(roll)=>{
        var rollNo = roll.target.value;
    this.state.student.map((student)=>{
     if(student.roll == rollNo)
       this.setState({warning:true});
    })
   } 
yearChange=(e)=>{
    this.setState({selectedYear:e.target.value})
}
   csBranch=(branch)=>{
    // if()
    this.num++;
    console.log("This is "+this.num);
    this.forceUpdate();
   }
   branchChange=(event)=>{
    this.setState({selectedBranch:event.target.value})
   }
branchChange=(e)=>{
    this.setState({branch:e.target.value})
}

   addData=(data)=>{
    data.preventDefault();
    var item={roll:this.state.roll*1,name:this.state.name,branch:this.state.branch,doj:this.state.year*1}
    this.setState({
        student:[...this.state.student,item]
    })
   }
    render(){
        return<>
        <div className="container">
            <div  className="mt-3 mb-3" style={{backgroundColor:'gray'}}><center>Student Record</center></div>
            <div className="row mt-3 mb-3">
                <div className="col-md-6 col-lg-6">
                    <label>Name:</label><br/>
                    <input className='form-control' type="text" name="name" onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </div>
                <div className="col md-6">
                    <label>Roll Number:</label><br/>
                    <input onKeyUp={(e)=>this.handle(e)} type='number' placeholder="ROll no here" className="form-control"></input>
                    <small id="emailHelp" className="form-text">{ (this.warning==true)? "Well never share your email with anyone else":""}</small>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col md-6">
                    <label>Branch:</label><br/>
                   <select className="form-control" value={this.state.branch} onChange={this.branchChange}>{this.state.branchList.map((item)=>{
                    return(
                        <option value={item}>{item}</option>
                    )
                   })}

                   </select>
                   
                </div>
                <div className="col md-6">
                    <label>Percentage:</label><br/>
                    <input type='number' placeholder="percentage here"></input>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col md-6">
                <button onClick={this.addData}  className="btn btn-success">Add</button>
                </div>
                <div className="col md-6">
                <button className="btn btn-info mx-2" onChange={this.csBranch()}>CS:{this.num}</button>
                <button className="btn btn-info mx-2">Ec:{}</button>
                <button className="btn btn-info mx-2">It:{} </button>
                <button className="btn btn-warning mx-2">Total</button>
                </div>
            </div>
       

          </div>
        </>
    }
}