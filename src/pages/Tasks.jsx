import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import EditTaskModal from "../components/EditTaskModal";

function Tasks({
  tasks,
  onAddTask,
  onToggle,
  onDelete,
  onEdit,
}) {
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPriority =
        priorityFilter === "All" ||
        task.priority === priorityFilter;

      const matchesCategory =
        categoryFilter === "All" ||
        task.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Completed" && task.completed) ||
        (statusFilter === "Active" && !task.completed);

      return (
        matchesSearch &&
        matchesPriority &&
        matchesCategory &&
        matchesStatus
      );
    })
    .sort((a, b) => {
      if (sortBy === "Newest") {
        return b.id - a.id;
      }

      if (sortBy === "Oldest") {
        return a.id - b.id;
      }

      if (sortBy === "Priority") {
        const priorityOrder = {
          High: 1,
          Medium: 2,
          Low: 3,
        };

        return (
          priorityOrder[a.priority] -
          priorityOrder[b.priority]
        );
      }

      return 0;
    });

  return (
    <section className="page">
      <div className="page-header">
        <h1>My Tasks</h1>
        <p>Create, search and organize your tasks.</p>
      </div>

      <TaskForm onAddTask={onAddTask} />

      <div className="task-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={priorityFilter}
          onChange={(e) =>
            setPriorityFilter(e.target.value)
          }
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
        >
          <option value="All">All Categories</option>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Personal">Personal</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Priority">Priority</option>
        </select>
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty">
            <h3>No matching tasks</h3>
            <p>
              Try changing your search or filters.
            </p>
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={setEditingTask}
            />
          ))
        )}
      </div>

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={onEdit}
          onClose={() => setEditingTask(null)}
        />
      )}
    </section>
  );
}

export default Tasks;