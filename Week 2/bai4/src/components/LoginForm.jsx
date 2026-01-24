import React from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <p>Login Form</p>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </div>
      </div>
    </>
  );
};
