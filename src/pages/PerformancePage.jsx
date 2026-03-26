import { memo, useCallback, useMemo, useState } from "react";

const items = [
  "React",
  "Angular",
  "Vue",
  "Svelte",
  "Solid",
  "Next",
  "Nuxt",
  "Remix",
  "Vite",
  "Webpack",
  "TypeScript",
  "JavaScript",
  "Node",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Jest",
  "Cypress",
  "Vitest",
];

const MemoChild = memo(function MemoChild({ onAction }) {
  console.log("render -> Memo Child");

  return (
    <div style={{ marginTop: "16px" }}>
      <button onClick={onAction}>Child Action</button>
    </div>
  );
});

function PerformancePage() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  console.log("render -> Performance Page");
  const filteredItems = useMemo(() => {
    console.log("compute -> filtering items");

    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const handleChildAction = useCallback(() => {
    console.log("child action clicked");
  }, []);

  return (
    <div>
      <h2>Performance Lab</h2>
      <p>Parent Count: {count}</p>
      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment parent count
        </button>

        <input
          type="text"
          placeholder="Search Frameworks"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <p>Filtered Results: {filteredItems.length}</p>
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <MemoChild onAction={handleChildAction} />
    </div>
  );
}

export default PerformancePage;
