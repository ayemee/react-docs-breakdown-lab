import { useEffect, useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);

  console.log("render -> CounterPage", count);

  useEffect(() => {
    console.log("effect -> count changed", count);
  }, [count]);
  return (
    <div>
      <h2>Counter Lab</h2>
      <p>Count: {count}</p>

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p>Open the browser console to see render and effect logs.</p>
    </div>
  );
}

export default CounterPage;
