function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li style={{ marginBottom: "12px" }}>
      <span
        style={{
          marginRight: "12px",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onToggleTodo(todo.id)}
        style={{ marginRight: "8px" }}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        style={{ marginRight: "8px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
