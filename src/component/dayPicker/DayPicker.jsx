import { useState } from "react";

import { DayPickerContainer, CheckBoxWrapper } from "./DayPicker.styles";
import PickerOptions from "./PickerOptions";

const DAYSOFWEEK = [
  { id: 0, day: "일", isChecked: false },
  { id: 1, day: "월", isChecked: false },
  { id: 2, day: "화", isChecked: false },
  { id: 3, day: "수", isChecked: false },
  { id: 4, day: "목", isChecked: false },
  { id: 5, day: "금", isChecked: false },
  { id: 6, day: "토", isChecked: false },
];

function DayPicker({ onSelecteDay }) {
  const [weeks, setWeeks] = useState(DAYSOFWEEK);

  return (
    <DayPickerContainer>
      <header>요일</header>
      <CheckBoxWrapper>
        {weeks.map((week) => {
          return (
            <PickerOptions
              key={week.id}
              week={week}
              onSelecteDay={onSelecteDay}
            />
          );
        })}
      </CheckBoxWrapper>
    </DayPickerContainer>
  );
}

export default DayPicker;
