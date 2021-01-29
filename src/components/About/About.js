import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about__wrapper">
      <div className="container">
        <h3>About</h3>
        <p>Task tracker version:1.0.0 is built with React</p>
        <p>You can create task and assign a reminder on the scheduled date.</p>
        <p>Double click on a task to set a reminder</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
