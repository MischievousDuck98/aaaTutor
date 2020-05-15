import React, { Component } from "react";


export default class Login extends Component {
    render() {
        return (

            <div class="bg">
                <div className="auth-wrapper">
                    <div className="auth-inner rounded-0">
                        <div className="form-group">
                            <h2>Welcome Back!</h2>

                        </div>
                        <form class="transparent">
                            <input type="email" className="sign form-control rounded-0" placeholder="E-mail" />
                            
                            <input type="password" className="sign form-control rounded-0" placeholder="Password" />
                            <input type="submit" className="w-100 rounded-0 btn btn-primary btn-lg btn-tutor shadow"value="Log in"></input>
                        <small className="forgot-password float-right">

                        <a href="#">Forgot password?</a> </small>
                        </form>
                    </div>
                </div>
            </div>

        );

    }
}

/*export default class Login extends Component {
    render() {
        return (
            <form class="form-inline float-right">
                <div className="form-check">
                    <label className="navbar-label">Email address:  </label>
                    <input type="email" className="form-control rounded-0" />
                </div>

                <div className="form-group">
                    <label className="navbar-label">Password:</label>
                    <input type="password" className="form-control rounded-0" />
                </div>

                <div className="form-check">
                    <div className="custom-control">
                        <div className="row">
                            <input type="checkbox" className="form-control-input m-1" id="customCheck1" />
                            <label className="small m-0">Remember me</label>
                        </div>
                        <small className="forgot-password text-right">
                        <a href="#">Forgot password?</a>
                </small>
                    </div>
                </div>

                <button type="submit" className="btn btn-tutor btn-sm">Log In</button>

            </form>
        );
    }
} */