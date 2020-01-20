import React, { Component } from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "./Home"
import Skills from "./Skills"
import Interests from "./Interests"
 
class Main extends Component {

    
  render() {
    return (
        <HashRouter>
            <div>
            
            <ul className="nav">
                <li className = "name">
                    <NavLink 
                        className = "active" 
                        to="/"
                        activeStyle={{
                            color: "black",
                            fontWeight: "bold"
                         }}
                    >a.g.</NavLink>
                </li>
                <li>
                    <NavLink to="/skills"
                             activeStyle={{
                                 color: "black",
                                 fontWeight: "bold"
                             }}
                    >Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/interests"
                             activeStyle={{
                                color: "black",
                                fontWeight: "bold"
                             }}
                             >Interests</NavLink>
                </li>
                <li>
                    {/* 
                        make resume link download resume  
                    */}
                    <a href="resume.pdf">Resume</a>
                </li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/interests" component={Interests}/>
            </div>
            </div>
        </HashRouter>
    )
  }
}
 
export default Main