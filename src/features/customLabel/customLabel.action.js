export const customLabelAction = {
  addLabel: (state, action) => {
    const findLabel = state.labelLists.find(
      (label) => label.groupId === action.payload.groupTitle
    );
    if (findLabel) {
      console.log(findLabel);
      alert("You already have the same group name. Please use another name");
      return;
    }
    console.log(action);
    state.labelLists = state.labelLists.concat({ ...action.payload });
  },
  removeLabel: (state, action) => {
    const findLabel = state.labelLists.find(
      (label) => label.groupId === action.payload
    );
    if (!findLabel) {
      console.log(findLabel);
      alert("There is no such a group name.");
      return;
    }
    state.labelLists = state.labelLists.filter(
      (label) => label.groupId !== action.payload
    );
  },
  editLabel: (state, action) => {},
  selectLabel: (state, action) => {
    const findLabel = state.labelLists.find(
      (label) => label.groupId === action.payload
    );

    state.selectedLabel = findLabel;
  },
};
