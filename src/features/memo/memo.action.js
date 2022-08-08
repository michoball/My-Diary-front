export const memoAction = {
  addMemo: (state, action) => {},
  removeMemo: (state, action) => {},

  selectMemo: (state, action) => {
    const findMemo = state.memoLists.find((memo) => memo.id === action.payload);

    return {
      ...state,
      selectedMemo: findMemo,
    };
  },
};
