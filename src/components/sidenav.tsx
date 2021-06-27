import { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { TiPlusOutline } from "react-icons/ti";
import { FiAlertTriangle } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import "../styles/sidenav.css";
import avatar from "../assets/love.png";

function SideNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   let sidenav = document.querySelector(".sidenav");
  //   sidenav.addEventListener("onmouseenter")
  // }, []);

  return (
    <div
      className="sidenav"
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="circle-avatar-sm">
        <img src={avatar} alt="avatar" style={{ width: "100%" }} />
      </div>
      <div className="section1">
        <div className="menu">
          <FaUserEdit size={26} />
          {isOpen ? <h6>Edit Profile</h6> : ""}
        </div>
        <div className="menu">
          <TiPlusOutline size={26} />
          {isOpen ? <h6>Join a Classroom</h6> : ""}
        </div>
        <div className="menu">
          <FiAlertTriangle size={26} />
          {isOpen ? <h6>Report an issue</h6> : ""}
        </div>
      </div>
      <div style={{ flex: "auto" }}></div>
      <div className="section2">
        <div className="menu">
          <BsPersonFill size={26} />
          {isOpen ? <h6>My account</h6> : ""}
        </div>
        <div className="menu">
          <ImExit size={26} />
          {isOpen ? <h6>Log out</h6> : ""}
        </div>
      </div>
    </div>
  );
}

export default SideNav;
