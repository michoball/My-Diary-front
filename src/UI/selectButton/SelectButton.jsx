import React from "react";
import { useSelector } from "react-redux";
import { selectLabelList } from "../../features/customLabel/customLabel.select";
import { SelectContainer } from "./SelectButton.styles";

function SelectButton({ onLabelChange }) {
  const listOfLabels = useSelector(selectLabelList);
  console.log(listOfLabels);
  const labelChangeHandler = (e) => {
    const selectedLabel = listOfLabels.find(
      (label) => label.groupId === e.target.value
    );
    onLabelChange(selectedLabel);
  };

  return (
    <SelectContainer>
      <label>Label</label>
      <select onChange={labelChangeHandler}>
        {listOfLabels.map((label) => {
          return (
            <option key={label.groupId} value={label.groupId}>
              {label.groupId}
            </option>
          );
        })}
      </select>
    </SelectContainer>
  );
}

export default SelectButton;
