export const memoAction = {
  addMemo: (state, action) => {},
  removeMemo: (state, action) => {
    const removedMemo = state.memoLists.filter(
      (memo) => memo.id !== action.payload
    );
    return {
      ...state,
      memoLists: removedMemo,
    };
  },
  selectMemo: (state, action) => {
    const findMemo = state.memoLists.find((memo) => memo.id === action.payload);

    return {
      ...state,
      selectedMemo: findMemo,
    };
  },
  clearSelectMemo: (state) => {
    return {
      ...state,
      selectedMemo: null,
    };
  },
};
