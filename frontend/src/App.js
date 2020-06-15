import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Intro from "./components/intro.component";
import TutorProfile from "./components/tutorProfile.component";
import StudentProfile from "./components/studentProfile.component";
import Logo from "./components/Logo";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN", // TEACHER / STUDENT / NOT_LOGGED_IN
      transparentNavbar: 1,
      user: ""
    }
    // this.navbarHandler = this.navbarHandler.bind(this)
  }
  navbarHandler = id => {
    this.setState({transparentNavbar: id});
  }
  render() {
    return (<Router>
      <div className="App">
        <nav className={"navbar navbar-expand navbar-tutor position-fixed w-100 " + (this.state.transparentNavbar == 0 ? "navbar-transparent" : "navbar-color")}>
          <div  onClick={() => this.navbarHandler(1)}><Logo class="navbar-brand"/></div>
          <div className="m-0 w-100" >
            <div className="">
              <ul className="navbar-nav ml-auto float-right">
                <li className="nav-item"  onClick={() => this.navbarHandler(0)}>
                  <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/log-in"}>Log in</Link>
                </li>
                <li className="nav-item" onClick={() => this.navbarHandler(0)}>
                  <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Intro navbarHandler = {this.navbarHandler.bind(this)}/>
          </Route>
          <Route exact path='/log-in'>
            <Login />
          </Route>
          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          <Route exact path='/profile'>
            {this.state.user.isTutor ? <TutorProfile /> : <StudentProfile />}
          </Route>
        </Switch>

      </div>
    </Router>
    )
  };
}

