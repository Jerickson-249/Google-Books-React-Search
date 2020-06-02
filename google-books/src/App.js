import React, {Component} from "react"; 
import Header from "./Components/Header"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Saved from "./Containers/Saved";
import Search from "./Containers/Search";

class App extends Component{
  render(){
    return(
     <div className="App">
       <Router>
       <Header/>
       <Switch>
       <Route path="/Saved">
         <Saved/>
       </Route>
       <Route path="/">
         <Search/>
       </Route>
       </Switch>
       </Router> 
       </div>
    )
  }
}

export default App;