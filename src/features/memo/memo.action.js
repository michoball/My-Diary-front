export const memoAction = {
  addMemo: (state, action) => {
    const findMemo = state.memoLists.find(
      (memo) => memo.id === action.payload.id
    );
    if (findMemo) {
      return {
        ...state,
        memoLists: state.memoLists.map((memo) =>
          memo.id === action.payload.id ? { ...memo, ...action.payload } : memo
        ),
      };
    }
    return {
      ...state,
      memoLists: state.memoLists.concat({ ...action.payload }),
    };
  },
  removeMemo: (state, action) => {
    const findMemo = state.memoLists.find((memo) => memo.id === action.payload);
    if (findMemo) {
      return {
        ...state,
        memoLists: state.memoLists.filter((memo) => memo.id !== action.payload),
      };
    }
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
