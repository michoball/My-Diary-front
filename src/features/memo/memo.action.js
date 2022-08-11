const findMemo = (lists, id) => {
  return lists.find((list) => list.id === id);
};

export const memoAction = {
  addMemo: (state, action) => {
    const findedMemo = findMemo(state.memoLists, action.payload.id);
    if (findedMemo) {
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
    const findedMemo = findMemo(state.memoLists, action.payload);
    if (findedMemo) {
      return {
        ...state,
        memoLists: state.memoLists.filter((memo) => memo.id !== action.payload),
      };
    }
  },
  selectMemo: (state, action) => {
    const findedMemo = findMemo(state.memoLists, action.payload);
    return {
      ...state,
      selectedMemo: findedMemo,
    };
  },
  clearSelectMemo: (state) => {
    return {
      ...state,
      selectedMemo: null,
    };
  },
};
