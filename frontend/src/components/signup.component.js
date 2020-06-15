import React, { Component } from "react";
import axios from "axios";


export default class SignUp extends Component {
    constructor() {
        super();
    
        this.state = {
          username: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          isTutor: 0,
        }
        // this.navbarHandler = this.navbarHandler.bind(this)
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const { 
            username, 
            firstName, 
            lastName, 
            email, 
            password, 
            isTutor 
        } = this.state;

        const data = { 
            username,
            firstName, 
            lastName, 
            email, 
            password, 
            isTutor 
        };

        alert(data);

        try {
            axios.post("http://localhost:3000/user/register", data);
        } catch (e) {
            const message = e.response.data.message;
            alert(message);
        }
    }

    handleOnChangeInput = (e) => {
        const { value, name } = e.target;
        console.log(value, name);
        if(name === 'tutor') { this.setState({ isTutor: value === 'tutor' ? 1 : 0 }); } else { this.setState({[name]: value}); }
    }

    render() {
        return (
            <div class="bg">
                <div className="auth-wrapper">
                    <div className="auth-inner rounded-0">
                        <h2>Sign Up</h2>
                        <form class="form-check" onSubmit={this.handleOnSubmit}>
                            <input type="text" name="username" className="form-control sign rounded-0" placeholder="Your username" onChange={this.handleOnChangeInput} />
                            <input type="text" name="firstName" className="form-control sign rounded-0" placeholder="Your First name" onChange={this.handleOnChangeInput} />
                            <input type="text" name="lastName" className="form-control sign rounded-0" placeholder="Your Last name" onChange={this.handleOnChangeInput} />
                            <input type="email" name="email" className="form-control sign rounded-0" placeholder="Enter email" onChange={this.handleOnChangeInput} />
                            <input type="password" name="password" className="form-control sign rounded-0" placeholder="Enter password" onChange={this.handleOnChangeInput} />
                            <br></br>

                            <h4>Select your account type</h4>
                            <div class="form-check sign">
                                <label className="radio-container navbar-label  ">Student
                                <input type="radio" value="student" name="tutor" />
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radio-container navbar-label">Tutor
                                    <input type="radio" value="tutor" name="tutor" onChange={this.handleOnChangeInput} />
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                            <input type="submit" className="rounded-0 w-100 btn btn-primary btn-lg btn-tutor shadow" value="Sign Up" ></input>
                        </form>
                    </div>
                </div>
            </div>
        );

    }

}