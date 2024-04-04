import useMemo from "./store/memo";

const Memo = () => {
  const { memoList, removeMemo } = useMemo();
  return (
    <div>
      <ol>
        {memoList.map((item, idx) => {
          return (
            <li key={item.id}>
              {item.title}
              <button
                onClick={() => {
                  removeMemo(item.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Memo;
