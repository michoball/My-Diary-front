const findLabel = (labels, id) => {
  return labels.find((label) => label.groupId === id);
};

export const customLabelAction = {
  addLabel: (state, action) => {
    const existingLabel = findLabel(
      state.labelLists,
      action.payload.groupTitle
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
      (label) => label.groupId !== action.payload
    );
  },
  clearLabel: (state) => {
    console.log("clear");
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
