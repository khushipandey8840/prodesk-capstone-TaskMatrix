function Dashboard({ tasks }) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  const activeTasks = tasks.filter(
    (task) => !task.completed
  );

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High" && !task.completed
  );

  const completionRate =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks.length / tasks.length) * 100
        );

  const recentTasks = [...tasks]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Here's an overview of your productivity.
          </p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="dashboard-card">
          <span>Total Tasks</span>
          <strong>{tasks.length}</strong>
          <small>All your tasks</small>
        </div>

        <div className="dashboard-card">
          <span>Completed</span>
          <strong>{completedTasks.length}</strong>
          <small>Tasks finished</small>
        </div>

        <div className="dashboard-card">
          <span>Active</span>
          <strong>{activeTasks.length}</strong>
          <small>Tasks remaining</small>
        </div>

        <div className="dashboard-card">
          <span>High Priority</span>
          <strong>{highPriorityTasks.length}</strong>
          <small>Need attention</small>
        </div>
      </div>

      <div className="dashboard-layout">
        <div className="dashboard-section">
          <div className="section-title">
            <h2>Recent Tasks</h2>
          </div>

          {recentTasks.length === 0 ? (
            <div className="dashboard-empty">
              <h3>No tasks yet</h3>
              <p>
                Go to the Tasks page and create your
                first task.
              </p>
            </div>
          ) : (
            <div className="recent-task-list">
              {recentTasks.map((task) => (
                <div
                  className="recent-task"
                  key={task.id}
                >
                  <div>
                    <h3
                      className={
                        task.completed
                          ? "completed"
                          : ""
                      }
                    >
                      {task.title}
                    </h3>

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

                  <span
                    className={
                      task.completed
                        ? "status completed-status"
                        : "status active-status"
                    }
                  >
                    {task.completed
                      ? "Completed"
                      : "Active"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-section">
          <div className="section-title">
            <h2>Progress</h2>
          </div>

          <div className="progress-container">
            <div className="progress-info">
              <span>Completion Rate</span>
              <strong>{completionRate}%</strong>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${completionRate}%`,
                }}
              ></div>
            </div>

            <p>
              {completedTasks.length} of {tasks.length}{" "}
              tasks completed.
            </p>
          </div>

          <div className="productivity-message">
            {tasks.length === 0 ? (
              <p>
                Start adding tasks to track your
                productivity.
              </p>
            ) : completionRate === 100 ? (
              <p>
                🎉 Amazing! All your tasks are
                completed.
              </p>
            ) : completionRate >= 50 ? (
              <p>
                👍 Great progress! Keep going.
              </p>
            ) : (
              <p>
                💪 Keep working. You can do it!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;