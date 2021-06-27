import React from "react";
import "../styles/signup.css";

function Login() {
  return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-In</h1>
        <button className="student-btn">Student</button>
        <button className="teacher-btn">Teacher</button>
        <br />
        <input type="email" placeholder="email" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button className="submit-btn">Sign-in</button>
      </div>
    </div>
  );
}
export default Login;
