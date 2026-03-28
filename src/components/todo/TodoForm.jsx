function TodoForm({ inputValue, onInputChange, onAddTodo }) {
  return (
    <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
      <input
        type="text"
        placeholder="Add a todo"
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") onAddTodo();
        }}
      />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
}

export default TodoForm;
