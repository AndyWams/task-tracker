import { useState } from "react";
import "./TaskForm.css";
import Button from "../Button/Button";

const TaskForm = ({ addTask }) => {
  const [description, setDescription] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      console.log("please enter description");
      return;
    }
    addTask({ description, day, reminder });
    setDescription("");
    setReminder("");
    setDay("");
  };
  return (
    <div className="container__wrap">
      <form className="card task__form mb-4" onSubmit={onSubmit}>
        <div className="input">
          <label>Task Description</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter a task..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="input">
          <label>Set Day</label>
          <input
            type="date"
            name="day"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </div>
        <div className="input">
          <label className="checkbox">
            Set Reminder:
            <input
              type="checkbox"
              name="reminder"
              className="ml-2"
              checked={reminder}
              value={reminder}
              onChange={(event) => setReminder(event.currentTarget.checked)}
            />
          </label>
        </div>
        <Button bgcolor="btn--secondary" btntext="Save Task" />
      </form>
    </div>
  );
};

export default TaskForm;
