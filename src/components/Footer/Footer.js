import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container d-flex justify-content-between align-items-center">
        <p>
          Dev by <img src="../logo.svg" alt="logo" />| copyright &copy; 2021
        </p>
        <Link to="/about">About</Link>
      </div>
    </footer>
  );
};

export default Footer;
