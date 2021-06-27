import { useState } from "react";
import SideNav from "../components/sidenav";
import "../styles/edit.css";
import { FaUserEdit } from "react-icons/fa";

const Student: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, sePthone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div id="editPage">
      <SideNav />
      <div className="edit">
        <div className="bio">
          <h1>EDIT PROFILE</h1>
          <div className="textfields">
            {/* <TextField
              value={name}
              label="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            /> */}
          </div>
        </div>
        <div className="profilePicture">
          <h1>Public/Private</h1>
        </div>
      </div>
    </div>
  );
};

export default Student;
