import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Toast from "./components/Toast";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      "taskmatrix_tasks"
    );

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];
  });

  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem("taskmatrix_theme") ||
      "light"
    );
  });

  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "taskmatrix_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  useEffect(() => {
    document.body.className =
      theme === "dark" ? "dark-theme" : "";

    localStorage.setItem(
      "taskmatrix_theme",
      theme
    );
  }, [theme]);

  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  const addTask = ({
    title,
    priority,
    category,
    dueDate,
  }) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      category,
      dueDate,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);

    showToast("Task added successfully!");
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );

    showToast("Task status updated!");
  };

  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );

    showToast("Task deleted successfully!", "error");
  };

  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id
          ? updatedTask
          : task
      )
    );

    showToast("Task updated successfully!");
  };

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Dashboard tasks={tasks} />}
          />

          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                onAddTask={addTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
                onEdit={editTask}
              />
            }
          />

          <Route
            path="/analytics"
            element={
              <Analytics tasks={tasks} />
            }
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Routes>
      </main>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}

export default App;