import SideNav from "../components/sidenav";
import "../styles/edit.css";

const Report: React.FC = () => {
  return (
    <div id="report">
      <SideNav />
      <div className="report">
        <h1>REPORT AN ISSUE</h1>
      </div>
    </div>
  );
};

export default Report;
