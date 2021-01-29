import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/TaskForm/TaskForm";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Go to the mall",
      day: "Tues 20th",
      reminder: true,
    },
    {
      id: 2,
      description: "Visit the dentist",
      day: "Tues 20th",
      reminder: false,
    },
    {
      id: 3,
      description: "Do laundry",
      day: "Tues 20th",
      reminder: false,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <main className="main">
      <div className={`main__wrapper  ${showForm ? "split" : "full"}`}>
        <Header onDisplay={() => setShowForm(!showForm)} showForm={showForm} />
        {showForm && <TaskForm addTask={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
            addTask={addTask}
            toggleFormDisplay={showForm}
          />
        ) : (
          <div className="empty__state">
            <h2>You've not created any task yet.</h2>
          </div>
        )}
        <Footer />
      </div>
    </main>
  );
}

export default App;
