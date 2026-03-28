import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import SectionCard from "../components/layout/SectionCard";

function CounterPage() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`Counter (${count})`);

  return (
    <SectionCard title="Counter Lab">
      <Counter count={count} setCount={setCount} />
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
    </SectionCard>
  );
}

export default CounterPage;
