import { useState } from "react";

import TodoForm from "../components/todo/TodoForm";
import TodoStats from "../components/todo/TodoStats";
import TodoList from "../components/todo/TodoList";
import SectionCard from "../components/layout/SectionCard";

function TodoPage() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Read React docs", completed: true },
    { id: 2, text: "Build to do app", completed: false },
  ]);

  function handleAddTodo() {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    const newTodo = {
      id: Date.now(),
      text: trimmedValue,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue("");
  }

  function handleToggleTodo(todoId) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <SectionCard title="Todo Lab">
      <TodoForm
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAddTodo={handleAddTodo}
      />
      <TodoStats
        totalTodos={totalTodos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
      />
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </SectionCard>
  );
}

export default TodoPage;
