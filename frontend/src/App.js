import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup/signup.component";
import Intro from "./components/intro.component";
import Logo from "./components/Logo";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN" // TEACHER / STUDENT / NOT_LOGGED_IN
    }
  }
  render() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand navbar-tutor position-fixed w-100 bd-navbar">
        
        <Logo  class="navbar-brand float-right"/>
        <div className="m-0 w-100 float-right">
          <div className="float-right">
          <Login/>
        </div>
      </div>
      </nav>
      
      <Switch>
          <Route exact path='/' component={Intro} />
          <Route path="/sign-up" component={SignUp} />
      </Switch>

    </div>     
  </Router>
  )};
}

