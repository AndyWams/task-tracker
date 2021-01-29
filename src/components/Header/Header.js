import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
const Header = ({ onDisplay, showForm }) => {
  const location = useLocation();
  return (
    <header>
      <div className="container">
        <h1>Task Tracker</h1>
        {location.pathname === "/" && (
          <Button
            bgcolor={showForm ? "btn--outline" : "btn--primary"}
            btntext={showForm ? "Hide Form" : "Add New Task"}
            onClick={onDisplay}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
