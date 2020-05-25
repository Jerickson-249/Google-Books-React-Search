import React, {Component} from "react"; 
import Header from "./Components/Header"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Saved from "./Containers/Saved";
import Search from "./Containers/Search";

class App extends Component{
  render(){
    return(
     <Router>
       <Header/>
       <Route path="/">
         <Search/>
       </Route>
       </Router> 
    )
  }
}

export default App;