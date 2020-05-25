import React from "react";
import "./style.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Header(props){
    return(
      <div className="header">
        <Link to="/">Search</Link>
        <Link to="/saved">Saved</Link>
      </div>)
}

export default Header;