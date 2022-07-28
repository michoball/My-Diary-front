import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCustomLabelLists } from "../../features/customLabel/customLabel.select";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
import { SelectContainer } from "./SelectButton.styles";

function SelectButton() {
  const listOfLabels = useSelector(selectCustomLabelLists);
  const dispatch = useDispatch();
  const labelChangeHandler = (e) => {
    const selectLabelId = e.target.value;
    dispatch(customLabelActions.selectLabel(selectLabelId));
  };

  return (
    <SelectContainer>
      <label>Label</label>
      <select onChange={labelChangeHandler}>
        {listOfLabels.map((label) => {
          return (
            <option key={label.groupId} value={label.groupId}>
              {label.groupTitle}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
}

export default SelectButton;
