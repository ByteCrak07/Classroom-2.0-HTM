import SideNav from "../components/sidenav";
import Classes from "../components/classes";
import { BsPersonFill } from "react-icons/bs";
import "../styles/student.css";

const Student: React.FC = () => {
  return (
    <div>
      <SideNav />
      <div id="student-page">
        <h1>Student Page</h1>
        <div>
          <div>
            <BsPersonFill />
          </div>
          <h2>Welcome Abil</h2>
        </div>
      </div>
      <Classes />
    </div>
  );
};

export default Student;
