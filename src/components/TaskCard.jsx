function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <div className="task-card">
      <div className="task-info">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <div>
          <span
            className={
              task.completed ? "completed" : ""
            }
          >
            {task.title}
          </span>

          <div className="task-meta">
            <small>{task.category}</small>

            <small
              className={`priority ${task.priority.toLowerCase()}`}
            >
              {task.priority}
            </small>

            {task.dueDate && (
              <small>
                Due: {task.dueDate}
              </small>
            )}
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;