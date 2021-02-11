import React from "react"
import TagLine from "./TagLine"
import {NavLink} from "react-router-dom"

function NavBar(){
    return <header>
     <div id="navBar" className="navBar ">
        <img className="navImg " src="./images/logo.jpg"/>
        <ul className="navList">
            <li className="navItem"><NavLink to="https://gauravsp1.github.io/salad/">HOME</NavLink></li>
            <li className="navItem"><NavLink to="https://gauravsp1.github.io/salad/menu">MENU</NavLink></li>
            <li className="navItem"><a href="#location">LOCATION</a></li>
            <li className="navItem"><a href="#plan">SIGN UP</a></li>
        </ul>
        </div>
        
        <div>
        <TagLine/>
    </div>
    </header>
}

export default NavBar