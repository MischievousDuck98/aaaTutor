import React, { Component } from "react";

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
        this.setState({studentbuttonId: "student"});
    }
    checkIfTeacher(id) {
        this.setState({teacherbuttonId: "teacher"});
    }

    render() {
        /*if (this.UserType == "student") {
            return [
                <form>
                    <h3>Sign Up</h3>
    
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
    
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
    
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        <a href="#">Already registered? Sign in!</a>
                    </p>
                </form>
            ];
            }else if (this.UserType == "teacher") {
                return [
                    <form>
                        <h3>Sign Up</h3>
        
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
                         
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            <a href="#">Already registered? Sign in!</a>
                        </p>
                    </form>
                ];
            }*/
        return [
            <form>
                <h3>Sign Up</h3>
                {this.state.studentbuttonId == null && this.state.teacherbuttonId == null &&
                <React.Fragment>
                <div className = "form-group">
                    <div class="col text-center">
                        <button id="student" type="button" class="btn btn-primary btn-lg" onClick={() => this.checkIfStudent("student")}>Student</button>
                        <button id="teacher" type="button" class="btn btn-secondary btn-lg" onClick={() => this.checkIfTeacher("teacher")}>Teacher</button>
                    </div>
                </div>
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

                <div className="form-group">
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
        ];
        
    }

}