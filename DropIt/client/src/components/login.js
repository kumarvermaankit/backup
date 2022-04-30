import React, { useEffect, useState } from "react"
import "./login.css"
function Login(){
    return(
        <div className="loginPage">
            <div className="loginContainer">
                <h1>Login</h1>
                <div>
                    <label className="email">Email</label>
                    <br/>
                    <input className="input" id="email" v-model="email" type="email" placeholder="Your email address"></input>
                </div>
                <div>
                    <label className="password">Password</label>
                    <br/>
                    <input className="input" id="password" v-model="password" type="password" placeholder="Your Password"></input>
                </div>
                <div className="forgetPassword">
                <a href="#">Forget Password?</a>
                </div>
                <div className="login">
                    <button className="loginBtn">
                        Log in
                    </button>
                </div>
                <div className="signUp">
                    <button className="signupBtn">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login
