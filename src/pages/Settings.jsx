function Settings() {
  return (
    <section className="page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your TaskMatrix preferences.</p>
      </div>

      <div className="settings-card">
        <h2>Application Settings</h2>

        <label>
          <input type="checkbox" defaultChecked />
          Enable notifications
        </label>

        <label>
          <input type="checkbox" />
          Compact task view
        </label>
      </div>
    </section>
  );
}

export default Settings;