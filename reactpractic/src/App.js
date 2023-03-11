import { Component } from "react";
import Form from "./component/Form.js";
import Table from "./component/Table.js";
import TodoC from "./component/todoC.js";

import Input from "./component/Input.js";
import Demo from "./component/Demo.js";

export default class App extends Component{
constructor(){
  super();
}
render(){
  return<>
  {/* <Input/> */}
  {/* <Table/> */}
{/* <Form/> */}
{/* <Demo/> */}
<TodoC/>

  </>
}
}