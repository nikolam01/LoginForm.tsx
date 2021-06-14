import React from "react";
import "./Login.scss";

let Login = () => {
  return (
    <div id="loginSection">
      <form className="loginForm">
        <h1>Login</h1>
        <input className="email" placeholder="Enter email"></input>
        <input className="password" placeholder="Enter password"></input>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;
