import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/TaskForm/TaskForm";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  //Lifecycle method
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  //Get tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  //Get task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <main className="main">
        <Header onDisplay={() => setShowForm(!showForm)} showForm={showForm} />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <div className={`main__wrapper  ${showForm ? "split" : "full"}`}>
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
              </div>
            </>
          )}
        />

        <Route path="/about" render={() => <About />} />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
