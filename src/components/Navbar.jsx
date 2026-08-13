import { NavLink } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(
      theme === "light" ? "dark" : "light"
    );
  };

  return (
    <nav className="navbar">
      <div className="logo">TaskMatrix</div>

      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/analytics">Analytics</NavLink>
        <NavLink to="/settings">Settings</NavLink>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;