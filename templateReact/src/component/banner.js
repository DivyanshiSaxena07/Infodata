import { Component } from "react"
import './Style.css'
export default class Banner extends Component{
constructor(){
    super();
}
render(){
    return<><div className="container-fluid " id='banner'>
<center><h1 className="text">Cake Delicious</h1></center>
</div>
    </>
}
}