
import React from "react";

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form className="emi-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password</label>
        <input type="password" placeholder="Enter password" required />
        <button type="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
