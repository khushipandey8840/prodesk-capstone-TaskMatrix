import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="app">
      <Navbar />

      <main className="container" id="dashboard">
        <section className="hero">
          <div>
            <h1>Task Dashboard</h1>
            <p>Organize your work and stay productive.</p>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>{tasks.length}</strong>
              <span>Total Tasks</span>
            </div>

            <div className="stat">
              <strong>{completedTasks}</strong>
              <span>Completed</span>
            </div>

            <div className="stat">
              <strong>{tasks.length - completedTasks}</strong>
              <span>Pending</span>
            </div>
          </div>
        </section>

        <section id="tasks">
          <TaskForm onAddTask={addTask} />

          <div className="task-list">
            {tasks.length === 0 ? (
              <div className="empty">
                <h3>No tasks yet</h3>
                <p>Add your first task to get started.</p>
              </div>
            ) : (
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;