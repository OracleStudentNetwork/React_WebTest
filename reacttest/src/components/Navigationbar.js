import React from "react"
import {Navbar, Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Googlesignin from "./Googlesignin"
import "../style/nav.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

let link = {
    color: "white"
}
class Navigationbar extends React.Component{
    render(){
        return(<div>
            <Nav className="mr-auto" >
                <ul className = "navlinks">  
                    <li style = {link}>
                    <Link to = "/" style = {link}>Home</Link>
                    </li>
                    <li style = {link}>
                    <Link to = "/login" style = {link}>Login</Link>
                    </li>
                    <li><Googlesignin/></li>
            </ul>   
            </Nav>           
            
            </div>
        )
    }
}
export default Navigationbar