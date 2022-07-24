import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () =>{
   return(
     <div className="uplink">
     <ul className="__header">
        <li className="uplink"> <NavLink to="/" exact> HOME</NavLink>  </li>
        <li className="uplink"> <NavLink to="/about" exact>ABOUT </NavLink></li>
        <li className="uplink"> <NavLink to="/contact" exact>VACCINES </NavLink> </li>
        <li className="uplink"> <NavLink to="/login" exact>RULES </NavLink></li>
     </ul>
     </div>
   );
}

export default Header;