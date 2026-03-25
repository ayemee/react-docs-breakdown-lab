import { useState } from "react";
import CounterPage from "./pages/CounterPage";
import PerformancePage from "./pages/PerformancePage";
import TodoPage from "./pages/TodoPage";
import UsersPage from "./pages/UsersPage";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("counter");

  return (
    <div className="app">
      <header className="app-header"></header>
      <h1>React Docs Breakdown Lab</h1>
      <p>Small repo, wide React coverage by Ayemeeizing</p>

      <nav className="tab-nav">
        <button onClick={() => setActiveTab("counter")}>Counter</button>
        <button onClick={() => setActiveTab("performance")}>Performance</button>
        <button onClick={() => setActiveTab("todo")}>Todo</button>
        <button onClick={() => setActiveTab("users")}>Users</button>
      </nav>

      <main className="page-content">
        {activeTab === "counter" && <CounterPage />}
        {activeTab === "performance" && <PerformancePage />}
        {activeTab === "todo" && <TodoPage />}
        {activeTab === "users" && <UsersPage />}
      </main>
    </div>
  );
}

export default App;
