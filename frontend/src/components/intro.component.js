import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./Logo";

export default class Intro extends Component {
    render() {
        return (
            <div class="bg">
                <div class="intro-bg">
                    <div class="intro-img">
                        <div class="intro-img-bg">
                            <h2>Together for future<br /> Improve your education with us</h2>
                            <div onClick={() => this.props.navbarHandler(0)}><Link className="w-50 rounded-0 btn btn-primary btn-lg sign-up-button btn-tutor shadow" to={"/sign-up"}><h2>Create Account</h2></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}