import React, { Component, useContext } from "react";

import axios from "axios";
import AuthContext from "../contexts/AuthContext"

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            user: ""

        }
    }
    // setUser = user => {
    //     useContext(AuthContext);
    // }
    handleOnSubmit = async e => {
        e.preventDefault();
        const {
            email,
            password
        } = this.state;

        const data = {
            email,
            password
        };

        try {
            alert(data.email);
            const response = await axios.post('http://localhost:3000/user/login', data);
            const { token, user } = response.data;
            console.log(token, user);
            localStorage.setItem("token", token);
            this.state.user = user;
        } catch (e) {
            alert(e.message)
        }
    }

    handleOnChangeInput = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        this.setState({[name]: value});
        console.log([name]); 
    }
    render() {
        return (

            <div class="bg">
                <div className="auth-wrapper">
                    <div className="auth-inner rounded-0">
                        <div className="form-group">
                            <h2>Welcome Back!</h2>

                        </div>
                        <form class="transparent" onSubmit={this.handleOnSubmit}>
                            <input type="email" name="email" className="sign form-control rounded-0" placeholder="E-mail" onChange={this.handleOnChangeInput}/>
                            
                            <input type="password" name = "password" className="sign form-control rounded-0" placeholder="Password" onChange={this.handleOnChangeInput}/>
                            <input type="submit" onClick={() => this.props.navbarHandler(0)} className="w-100 rounded-0 btn btn-primary btn-lg btn-tutor shadow"value="Log in" ></input>
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