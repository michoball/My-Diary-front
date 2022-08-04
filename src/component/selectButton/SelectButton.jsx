import { useDispatch, useSelector } from "react-redux";
import { selectCustomLabelLists } from "../../features/customLabel/customLabel.select";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
import { SelectContainer } from "./SelectButton.styles";
import SelectOption from "../selectOption/SelectOption";

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
        <option value="">--label option--</option>
        {listOfLabels.map((label) => {
          return <SelectOption key={label.groupId} label={label} />;
        })}
      </select>
    </SelectContainer>
  );
}

export default SelectButton;
