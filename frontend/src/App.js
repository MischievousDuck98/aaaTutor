import React, { Component } from 'react';
import axios from 'axios';
import './bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Intro from "./components/intro.component";
import TutorProfile from "./components/tutorProfile.component";
import StudentProfile from "./components/studentProfile.component";
import Marketplace from "./components/marketplace.component";
import Logo from "./components/Logo";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN", // TEACHER / STUDENT / NOT_LOGGED_IN
      isInitiated: false,
      transparentNavbar: 1,
      user: null
    }
    // this.navbarHandler = this.navbarHandler.bind(this)
  }

  componentDidMount() {
    this.handleUserInitialization();
  }

  handleUserInitialization = async () => {
    const token = localStorage.getItem("token");
    console.log(token, 'mata');
    if(token !== 'null')
    {
      const response = await axios.get('http://localhost:3000/user/me');
      const { user } = response.data;
      this.setState({ user });
    }
    this.setState({ isInitiated: true });

  }

  handleLogout = () => {
    this.setState({ user: null })
    localStorage.setItem("token", null);
  };

  navbarHandler = id => {
    this.setState({ transparentNavbar: id });
  }

  render() {
    return (<Router>
      <div className="App">
        <nav className={"navbar navbar-expand navbar-tutor position-fixed w-100 " + (this.state.transparentNavbar == 0 ? "navbar-transparent" : "navbar-color")}>
          <div onClick={() => this.navbarHandler(1)}><Logo class="navbar-brand"/></div>
          <div className="m-0 w-100" >
            <div className="">
            <ul className="navbar-nav ml-auto float-right">
              {
                this.state.user === null ? (
                  <React.Fragment>
                  
                  <li className="nav-item"  onClick={() => this.navbarHandler(0)}>
                    <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/log-in"}>Log in</Link>
                  </li>
                  <li className="nav-item" onClick={() => this.navbarHandler(0)}>
                    <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/sign-up"}>Sign up</Link>
                  </li>
                  </React.Fragment>
                
                ) : (
                  <React.Fragment>
                    <li className="nav-item"  onClick={() => this.navbarHandler(0)}>
                    {`welcome back, ${this.state.user.username}`}
                    </li>
                  
                 

                  <li className="nav-item" onClick={() => this.handleLogout()}>
                    <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/"}>Logout</Link>
                  </li>
                  </React.Fragment>
                  )
              }
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Intro navbarHandler = {this.navbarHandler.bind(this)}/>
          </Route>
          <Route exact path='/log-in'>
            <Login navbarHandler = {this.navbarHandler.bind(this)}/>
          </Route>
          <Route exact path='/sign-up'>
            <SignUp navbarHandler = {this.navbarHandler.bind(this)}/>
          </Route>
          <Route exact path='/profile'>
            {this.state.user?.isTutor ? <TutorProfile /> : <StudentProfile />}
          </Route>
          <Route exact path='/marketplace'>
            {this.state.user?.isTutor ? <Marketplace /> : <StudentProfile />}
          </Route>
          
        </Switch>

      </div>
    </Router>
    )
  };
}

