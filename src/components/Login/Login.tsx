import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <input className="email" placeholder="Enter email"></input>
      <input className="password" placeholder="Enter password"></input>
      <button className="submit">Submit</button>
    </div>
  );
};

export default Login;
