function TodoStats({ totalTodos, activeTodos, completedTodos }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <p>Total: {totalTodos}</p>
      <p>Active: {activeTodos}</p>
      <p>Completed: {completedTodos}</p>
    </div>
  );
}

export default TodoStats;
