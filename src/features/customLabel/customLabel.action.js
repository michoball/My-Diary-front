export const customLabelAction = {
  addLabel: (state, action) => {
    const findLabel = state.labelLists.find(
      (label) => label.groupId === action.payload.groupTitle
    );
    if (findLabel) {
      alert("You already have the same group name. Please use another name");
      return;
    }
    state.labelLists = state.labelLists.concat({ ...action.payload });
  },
  removeLabel: (state, action) => {
    const findLabel = state.labelLists.find(
      (label) => label.groupId === action.payload
    );
    if (!findLabel) {
      alert("There is no such a group name.");
      return;
    }
    state.labelLists = state.labelLists.filter(
      (label) => label.groupId !== action.payload
    );
  },
  editLabel: (state, action) => {},
  clearLabel: (state) => {
    console.log("clear");
    return {
      ...state,
      selectedLabel: null,
    };
  },
  selectLabel: (state, action) => {
    const findLabel = state.labelLists.find(
      (label) => label.groupId === action.payload
    );
    if (state.selectLabel === findLabel) {
      return state;
    }
    return {
      ...state,
      selectedLabel: findLabel,
    };
  },
};
