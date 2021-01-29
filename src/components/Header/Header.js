import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import Button from "../Button/Button";
const Header = ({ onDisplay, showForm }) => {
  return (
    <header>
      <div className="container">
        <h1>Task Tracker</h1>
        <Button
          bgcolor={showForm ? "btn--outline" : "btn--primary"}
          btntext={showForm ? "Hide Form" : "Add New Task"}
          onClick={onDisplay}
        />
      </div>
    </header>
  );
};

export default Header;
