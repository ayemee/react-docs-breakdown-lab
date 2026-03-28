import { memo } from "react";

const MemoChild = memo(function MemoChild({ onAction }) {
  console.log("render -> Memo Child");
  return (
    <div style={{ marginTop: "16px" }}>
      <button onClick={onAction}>Child Action</button>
    </div>
  );
});

export default MemoChild;
