import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form class="form-inline float-right">
                <div className="form-check">
                    <label className="pr2">Email address:  </label>
                    <input type="email" className="form-control rounded-0" />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control rounded-0" />
                </div>

                <div className="form-check small">
                    <div className="custom-control">
                        <div className="row">
                            <input type="checkbox" className="form-control-input m-1" id="customCheck1" />
                            <label className="">Remember me</label>
                        </div>
                        <small className="forgot-password text-right">
                        <a href="#">Forgot password?</a>
                </small>
                    </div>
                </div>

                <button type="submit" className="btn btn-tutor btn-sm">Submit</button>
                
            </form>
        );
    }
}