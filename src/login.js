import React from 'react';
import './login.css';
import { handleAuthentication } from './auth';

function Login() {
  return (
    <div className="main777">
      <div className="login-content777">
        <h1>Login to Spotify</h1>
        <button className="login-button777">Continue with Google</button>
        <button className="login-button777">Continue with Facebook</button>
        <form className="login-form777">
          <label>Email or User name</label>
          <br />
          <input id='email-or-username777' type="text" name="nm" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" id="password777" name="pass" />
          <br />
        </form>
        <button onClick={handleAuthentication} className="login-button777 login-submit777">
          Login
        </button>
      </div>
    </div>
  );
}



export default Login;
