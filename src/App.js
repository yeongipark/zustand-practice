import "./App.css";
import useMemo from "./store/memo";
import Memo from "./Memo";
import Edit from "./Edit";

function App() {
  const { memoList, addMemo } = useMemo();

  return (
    <div className="App">
      <Edit />
      <Memo />
    </div>
  );
}

export default App;
