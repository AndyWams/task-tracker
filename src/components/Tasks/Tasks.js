import Task from "../Task/Task";

import "./Tasks.css";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <section className="main__content">
      <div className="container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default Tasks;
