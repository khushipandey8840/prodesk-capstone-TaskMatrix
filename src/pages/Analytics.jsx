function Analytics({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;

  const completionRate =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (
    <section className="page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>Track your productivity.</p>
      </div>

      <div className="analytics-card">
        <h2>Completion Rate</h2>

        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>

        <strong>{completionRate}%</strong>
      </div>
    </section>
  );
}

export default Analytics;