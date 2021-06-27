import { FcGoogle } from "react-icons/fc";
import "../styles/welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome-welcome">
      <h1 className="welcome-heading">CLASSROOM 2.0</h1>
      <div className="welcome-btns">
        <button className="welcome-login">Login </button>
        <button className="welcome-google">
          <FcGoogle
            style={{
              height: "1.5rem",
              width: "1.5rem",
              marginRight: "1rem",
            }}
          />
          <div>Sign in with Google</div>
        </button>
      </div>
      <div className="welcome-signuprow">
        <i>New User? </i>
        <Link to="/signup" className="welcome-sign">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
