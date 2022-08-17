import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";
import { selectEditEvent } from "../../features/calendar/calendar.select";

function SelectOption({ label }) {
  const optionRef = useRef();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);

  useEffect(() => {
    if (selectEvent) {
      if (
        selectedLabel === null &&
        selectEvent.labelTitle === label.labelTitle
      ) {
        const optionSelect = optionRef.current;
        optionSelect.selected = true;
      }
    }
  }, [selectEvent, selectedLabel, label.labelTitle]);

  useEffect(() => {
    if (selectedLabel && selectedLabel.labelTitle === label.labelTitle) {
      const optionSelect = optionRef.current;
      optionSelect.selected = true;
    }
  }, [selectedLabel, label.labelTitle]);

  return (
    <option value={label.labelId} ref={optionRef}>
      {label.labelTitle}
    </option>
  );
}

export default SelectOption;
