import { Component } from "react";
import About from "./component/AboutUs.js";
import Banner from "./component/banner.js";
import Banner1 from "./component/banner1.js";
import Contact from "./component/contact.js";
import  Header  from "./component/Header.js";
import  Footer  from "./component/footer.js";
import Main from "./component/main.js";

export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    return <>
    <Header/>
    <Banner/>
    <Banner1/>
    <Main/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  }
}