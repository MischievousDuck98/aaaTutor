import React, { Component } from "react";


export default class SignUp extends Component {
    render() {
        return (
            <div class="bg">
                <div className="auth-wrapper">
                    <div className="auth-inner rounded-0">
                        <h2>Sign Up</h2>
                        <form class="form-check">
                            <input type="text" className="form-control sign rounded-0" placeholder="Your First name" />
                            <input type="text" className="form-control sign rounded-0" placeholder="Your Last name" />
                            <input type="email" className="form-control sign rounded-0" placeholder="Enter email" />
                            <input type="password" className="form-control sign rounded-0" placeholder="Enter password" />
                            <br></br>

                            <h4>Select your account type</h4>
                            <div class="form-check sign">
                                <label className="radio-container navbar-label  ">Student
                                <input type="radio" value="student" name="radio" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radio-container navbar-label">Tutor
                                    <input type="radio" value="teacher" name="radio" />
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                            <input type="submit" className="rounded-0 w-100 btn btn-primary btn-lg btn-tutor shadow" value="Sign Up"></input>
                        </form>
                    </div>
                </div>
            </div>
        );

    }

}