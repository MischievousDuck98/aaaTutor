import React, { Component } from "react";


import Logo from "./Logo";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand navbar-tutor position-fixed w-100">
                <Logo class="navbar-brand" />
                <div className="m-0 w-100">
                    <div className="">
                        <ul className="navbar-nav ml-auto float-right">
                            <li className="nav-item">
                                <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/log-in"}>Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="rounded-0 navbar-label btn btn-primary btn-lg btn-tutor shadow" to={"/sign-up"}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );

    }
}