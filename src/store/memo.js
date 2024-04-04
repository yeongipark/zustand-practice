import { create } from "zustand";

const useMemo = create((set) => ({
  memoList: [
    { id: 0, title: "안녕하세요" },
    { id: 1, title: "반갑습니다." },
  ],
  memo: "하이요",
  addMemo: (memo) =>
    set((state) => ({
      memoList: [...state.memoList, memo],
    })),
  removeMemo: (id) =>
    set((state) => ({
      memoList: state.memoList.filter((item) => {
        return item.id != id;
      }),
    })),
}));

export default useMemo;
