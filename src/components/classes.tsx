import "../styles/classes.css";
import { FaPlus } from "react-icons/fa";
interface ClassProps {
  classname: string;
}

function Class({ classname }: ClassProps) {
  return (
    <div className="class">
      <h2>{classname}</h2>
    </div>
  );
}

function Classes() {
  return (
    <div className="classrooms">
      <Class classname="S1" />
      <Class classname="S2" />
      <Class classname="S3" />
      <Class classname="S4" />
      <Class classname="S5" />
      <div className="class plus" style={{ background: "#e2f3f5" }}>
        <div className="add-class">
          <FaPlus color="white" size={30} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default Classes;
