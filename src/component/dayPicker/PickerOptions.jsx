import { useState, useRef, useEffect } from "react";
import { CheckBoxContainer } from "./DayPicker.styles";

import { useSelector } from "react-redux";
import { selectEditEvent } from "../../features/calendar/calendar.select";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";

function PickerOptions({ week, onSelecteDay }) {
  const [selectDay, setSelectDay] = useState(new Set());
  // const [isChecked, setIsChecked] = useState(false);
  const dayCheckRef = useRef();
  const selectEvent = useSelector(selectEditEvent);
  const selectedLabel = useSelector(selectSelectedLabel);

  useEffect(() => {
    if (selectedLabel && selectedLabel.daysOfWeek) {
      for (let i = 0; i < selectedLabel.daysOfWeek.length; i++) {
        if (selectedLabel.daysOfWeek[i] === dayCheckRef.current.value) {
          dayCheckRef.current.checked = true;
          selectDay.add(dayCheckRef.current.value);
          setSelectDay(selectDay);
        }
      }
    }
  }, [selectedLabel, selectDay]);

  useEffect(() => {
    if (selectEvent && selectEvent.daysOfWeek) {
      for (let i = 0; i < selectEvent.daysOfWeek.length; i++) {
        if (selectEvent.daysOfWeek[i] === dayCheckRef.current.value) {
          dayCheckRef.current.checked = true;
          selectDay.add(dayCheckRef.current.value);
          setSelectDay(selectDay);
        }
      }
    }
  }, [selectEvent, selectDay]);

  const onChangeHandler = (e) => {
    const day = e.target;
    if (day.checked) {
      selectDay.add(day.value);
      setSelectDay(selectDay);
    } else if (!day.checked && selectDay.has(day.value)) {
      selectDay.delete(day.value);
      setSelectDay(selectDay);
    }

    onSelecteDay(selectDay);
    console.log(selectDay);
  };

  const onClickHandler = (e) => {
    e.target.nextSibling.checked = !e.target.nextSibling.checked;
  };

  return (
    <CheckBoxContainer key={week.id}>
      <label className="day-label" id={week.id} onClick={onClickHandler}>
        {week.day}
      </label>
      <input
        type="checkbox"
        className="checkbox"
        value={week.id}
        onChange={onChangeHandler}
        ref={dayCheckRef}
      />
    </CheckBoxContainer>
  );
}

export default PickerOptions;
