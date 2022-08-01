import React, { useState } from "react";

import {
  DayPickerContainer,
  CheckBoxWrapper,
  CheckBoxContainer,
} from "./DayPicker.styles";

const DAYSOFWEEK = [
  { id: 0, day: "일" },
  { id: 1, day: "월" },
  { id: 2, day: "화" },
  { id: 3, day: "수" },
  { id: 4, day: "목" },
  { id: 5, day: "금" },
  { id: 6, day: "토" },
];

function DayPicker({ onSelecteDay }) {
  const [weeks, setWeeks] = useState(DAYSOFWEEK);
  const [selectDay, setSelectDay] = useState(new Set());
  // const [isChecked, setIsChecked] = useState(false);

  const onChangeHandler = (e) => {
    console.log("change");
    const day = e.target;
    if (day.checked) {
      selectDay.add(day.value);
      setSelectDay(selectDay);
    } else if (!day.checked && selectDay.has(day.value)) {
      selectDay.delete(day.value);
      setSelectDay(selectDay);
    }
    onSelecteDay(selectDay);
  };

  const onClickHandler = (e) => {
    e.target.nextSibling.checked = !e.target.nextSibling.checked;
  };

  return (
    <DayPickerContainer>
      <header>요일</header>
      <CheckBoxWrapper>
        {weeks.map((week) => {
          return (
            <CheckBoxContainer key={week.id}>
              <label id={week.id} onClick={onClickHandler}>
                {week.day}
              </label>
              <input
                type="checkbox"
                value={week.id}
                onChange={onChangeHandler}
              />
            </CheckBoxContainer>
          );
        })}
      </CheckBoxWrapper>
    </DayPickerContainer>
  );
}

export default DayPicker;
