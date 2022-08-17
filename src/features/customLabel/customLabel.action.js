const findLabel = (labels, id) => {
  return labels.find((label) => label.labelId === id);
};

export const customLabelAction = {
  addLabel: (state, action) => {
    const existingLabel = findLabel(
      state.labelLists,
      action.payload.labelTitle
    );
    if (existingLabel) {
      alert("You already have the same group name. Please use another name");
      return;
    }
    state.labelLists = state.labelLists.concat({ ...action.payload });
  },
  removeLabel: (state, action) => {
    const existingLabel = findLabel(state.labelLists, action.payload);

    if (!existingLabel) {
      alert("There is no such a group name.");
      return;
    }
    state.labelLists = state.labelLists.filter(
      (label) => label.labelId !== action.payload
    );
  },
  clearLabel: (state) => {
    return {
      ...state,
      selectedLabel: null,
    };
  },
  selectLabel: (state, action) => {
    const existingLabel = findLabel(state.labelLists, action.payload);

    if (state.selectLabel === existingLabel) {
      return state;
    }
    return {
      ...state,
      selectedLabel: existingLabel,
    };
  },
};
