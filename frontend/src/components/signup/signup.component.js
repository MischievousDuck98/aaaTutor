import React, { Component } from "react";


import Student from './student.component';
import Teacher from './teacher.component';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentbuttonId: null,
            teacherbuttonId: null
        }
        this.checkIfStudent = this.checkIfStudent.bind(this);
        this.checkIfTeacher = this.checkIfTeacher.bind(this);
    }

    checkIfStudent(id) {
        this.setState({ studentbuttonId: "student" });
    }
    checkIfTeacher(id) {
        this.setState({ teacherbuttonId: "teacher" });
    }

    render() {
        return [
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div className="form-group">
                        <h3>Sign Up</h3>
                        <div class="col text-center">
                            <button id="student" type="button" class="btn btn-primary btn-lg btn-tutor shadow" onClick={() => this.checkIfStudent("student")}>Student</button>
                            <button id="teacher" type="button" class="btn btn-secondary btn-lg btn-tutor" onClick={() => this.checkIfTeacher("teacher")}>Teacher</button>
                        </div>
                    </div>
                    <form>
                        {this.state.studentbuttonId == null && this.state.teacherbuttonId == null &&
                            <React.Fragment>

                            </React.Fragment>}
                        {this.state.studentbuttonId === "student" &&
                            <React.Fragment>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>

                                <div className="form-group">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>

                                <div className="form-group m-1">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>
                            </React.Fragment>}
                        {this.state.teacherbuttonId === "teacher" &&
                            <React.Fragment>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>

                                <div className="form-group">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>

                                <div className="form-group">
                                    <label>Teaching</label>
                                    <input type="text" className="form-control" placeholder="Course" />
                                </div>

                                <div className="form-group">
                                    <label>Worked at</label>
                                    <input type="text" className="form-control" placeholder="University of ..." />
                                </div>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" />
                                </div>
                            </React.Fragment>}
                        <p className="forgot-password text-right">
                            <a href="#">Already registered? Sign in!</a>
                        </p>
                    </form>
                </div>
            </div>
        ];

    }

}