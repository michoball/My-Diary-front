import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";

function SelectOption({ label }) {
  const optionRef = useRef();
  const selectedLabel = useSelector(selectSelectedLabel);

  useEffect(() => {
    if (selectedLabel && selectedLabel.groupTitle === label.groupTitle) {
      const optionSelect = optionRef.current;
      optionSelect.selected = true;
    }
  }, [selectedLabel, label.groupTitle]);

  return (
    <option value={label.groupId} ref={optionRef}>
      {label.groupTitle}
    </option>
  );
}

export default SelectOption;
