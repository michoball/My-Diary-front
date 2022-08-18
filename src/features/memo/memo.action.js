import { createMemos, updateMemo } from "./memo.thunk";

const lookupMemo = (lists, id) => {
  return lists.find((list) => list._id === id);
};

// add, remove => set memo
export const addMemo = (memoLists, newMemoData) => {
  const findMemo = lookupMemo(memoLists, newMemoData._id);

  if (findMemo) {
    return updateMemo({ memoId: findMemo._id, memoData: newMemoData });
  } else {
    return createMemos(newMemoData);
  }
};

// export const removeMemo = (memoLists, deleteMemoId) => {
//   const findMemo = lookupMemo(memoLists, deleteMemoId);
//   if (findMemo) {
//     return deleteMemo(deleteMemoId)
//   }
// };

// // 비동기 처리 불필요
// export const selectMemo = (state, action) => {
//   const findedMemo = findMemo(state.memoLists, action.payload);
//   return {
//     ...state,
//     selectedMemo: findedMemo,
//   };
// };
// export const clearSelectMemo = (state) => {
//   return {
//     ...state,
//     selectedMemo: null,
//   };
// };
