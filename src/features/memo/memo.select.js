import { createSelector } from "reselect";

const selectMemoListsReducer = (state) => state.memo;

export const selectMemoLists = createSelector(
  [selectMemoListsReducer],
  (selectMemoListsSlice) => {
    return selectMemoListsSlice.memoLists;
  }
);

export const selectMemo = createSelector(
  [selectMemoListsReducer],
  (selectMemoListsSlice) => {
    return selectMemoListsSlice.selectedMemo;
  }
);

export const selectMajorMemos = createSelector(
  [selectMemoLists],
  (memoListsSlice) => {
    return memoListsSlice.filter((memo) => memo.major === true);
  }
);

// export const selectRecentMemoLists = createSelector(
//   [selectMemoLists],
//   (memoListsSlice) => {
//     const copyList = [...memoListsSlice];
//     return copyList
//       .sort((a, b) => new Date(b.date) - new Date(a.date))
//       .slice(0, 5);
//   }
// );
