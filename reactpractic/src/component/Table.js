import {Component} from 'react'
import Student from './data.js';
import Input from './Input.js';
export default class Table extends Component{
    constructor(){
        super();
        this.state={
            studentList:Student,
            branchList:['All','CS','IT','EC'],
            yearList:['All',2019,2020,2021,2022,2023],
            selectedBranch:'All',
            selectedYear:'All'
        }
       
        
    }
    branchFilter=(event)=>{
        this.setState({selectedBranch:event.target.value});
    }
    yearFilter=(event)=>{
        this.setState({selectedYear:event.target.value});
    }
    deletFilter=(event)=>{
        const con= window.confirm("Are u sure?")
        if(con==true){

            this.state.studentList.splice(event,1)
            this.setState({studentList:this.state.studentList});
            console.log(con);
        }
    }
    submitData=()=>{

    }
    render(){
        return(<div className='container' style={{backgroundColor:'lightgrey'}}>
            <div className='row'> 
            <div className='col md-4'>
                
                {/* <label>Name :</label>
                <input type='text' name='name'></input><br/>
                <label>RollNo:</label>
                <input type='number' name='roll'></input><br/>
                <label>Percen:</label>
                <input type='number' name='per'></input><br/>
                <label>Branch:</label>
                <input type='select' name='branch'></input>
                <br/><br/><button className='btn btn-success' onClick={this.submitData}>Add</button> */}
                </div>
            <div className='col md-4 mt-5'>
          
            <select onChange={this.branchFilter} className='btn btn-primary '>
                {
                    this.state.branchList.map((branch,index)=><option value={branch}>{branch}</option>
                    )
                }
           </select>
        </div>
        <div className='col md-4 mt-5'>
           <h4 >Year</h4>  
           <select onChange={this.yearFilter} className='btn btn-primary'>
           {
                    this.state.yearList.map((year,index)=><option value={year}>{year}</option>
                    )
                }
        </select>
        </div>
          
           </div>
       <table className="table table-bordered" style={{marginTop:'10%',backgroundColor:'whitesmoke'}}>
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Roll</th>
        <th>Branch</th>
        <th>DOJ</th>
        <th>Percentage</th>
        <th>Remove </th>
      </tr>
    </thead>
    <tbody>
        {
            this.state.studentList.filter((item)=>this.state.selectedBranch=='All'||item.branch==this.state.selectedBranch).filter((item)=>this.state.selectedYear=='All'||item.doj==this.state.selectedYear).map((item,index)=>{
                return(
                    <tr>
                        <td>{item.sno}</td>
                        <td>{item.name}</td>
                        <td>{item.roll}</td>
                        <td>{item.branch}</td>
                        <td>{item.doj}</td>
                        <td>{item.per}</td>
                        <button onClick={()=>{this.deletFilter(index)}} className='btn btn-outline-danger'>Delete</button>
                    </tr>
                )
            })
        }
         </tbody>
  </table>
        </div>)
    }
  
}