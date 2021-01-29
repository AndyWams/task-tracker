import "./Task.css";

import { FaTrashAlt } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task__item ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="d-flex justify-content-end">
        <span className="remove" onClick={() => onDelete(task.id)}>
          <FaTrashAlt />
        </span>
      </div>
      <p>
        {task.description}
        <span>{task.day}</span>
      </p>
    </div>
  );
};

export default Task;
