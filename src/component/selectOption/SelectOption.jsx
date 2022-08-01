import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";
import { selectEditEvent } from "../../features/calendar/calendar.select";

function SelectOption({ label }) {
  const optionRef = useRef();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);

  useEffect(() => {
    if (selectedLabel && selectedLabel.groupTitle === label.groupTitle) {
      const optionSelect = optionRef.current;
      optionSelect.selected = true;
    }
  }, [selectedLabel, label.groupTitle]);

  useEffect(() => {
    if (selectEvent && selectEvent.groupTitle === label.groupTitle) {
      const optionSelect = optionRef.current;
      optionSelect.selected = true;
    }
  }, [selectEvent, label.groupTitle]);

  return (
    <option value={label.groupId} ref={optionRef}>
      {label.groupTitle}
    </option>
  );
}

export default SelectOption;
