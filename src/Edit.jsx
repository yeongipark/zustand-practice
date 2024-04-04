import useMemo from "./store/memo";
import { useState, useRef } from "react";

const Edit = () => {
  const { addMemo } = useMemo();
  const [input, setInput] = useState("");
  const id = useRef(2);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddMemo = () => {
    if (input.length < 2) {
      alert("2글자 이상 입력해주세요");
      return;
    }
    addMemo({ title: input, id: id.current });
    id.current++;
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddMemo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddMemo}>추가</button>
    </div>
  );
};

export default Edit;
