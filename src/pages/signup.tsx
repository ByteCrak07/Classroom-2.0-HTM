import React from "react";
import "../styles/signup.css";

function SignUp() {
  return (
    <div className="signup">
      <div className="sign">
        <h1>Sign-Up</h1>
        <button className="student-btn">Student</button>
        <button className="teacher-btn">Teacher</button>
        <br />
        <input type="email" placeholder="email" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <input type="password" placeholder="re-enter password" />
        <br />
        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
}

export default SignUp;
