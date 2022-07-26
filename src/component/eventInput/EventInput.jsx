import { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../features/calendar/calendarSlice";
import { v4 as uuidv4 } from "uuid";

import ColorPicker from "../colorPicker/ColorPicker";
import ToggleSwitch from "../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../UI/selectButton/SelectButton";

import { Check2Circle } from "react-bootstrap-icons";
import {
  InputContainer,
  InputForm,
  SubmitBtn,
  ColorSection,
  OptionContainer,
  EventFormInput,
} from "./EventInput.styles";

const defaultEvent = {
  groupId: "",
  title: "",
  start: "",
  end: "",
  color: "",
};

function EventInput({ onConfirm }) {
  const [newEvent, setNewEvent] = useState(defaultEvent);
  const [colorPick, setColorPick] = useState("#f44336");
  const [allDay, setAllDay] = useState(false);
  const dispatch = useDispatch();
  const { title, start, end } = newEvent;

  const inputChange = (e) => {
    setNewEvent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (title === "" || start === "" || end === "") {
      return alert("이벤트를 입력하시오");
    }
    console.log(start, end);
    // const startSet = allDay ? start : start + "T" + startTime;
    // const endSet = allDay ? end + "T24:00" : end + "T" + endTime;

    dispatch(
      calendarActions.addEvent({
        id: uuidv4(),
        title,
        start,
        end,
        color: colorPick,
        allDay,
      })
    );
    onConfirm();
    setNewEvent(defaultEvent);
  };

  const toggleAllDayHandler = (checked) => {
    setAllDay(checked);
  };

  const SelectedLabelHanlder = (label) => {
    setNewEvent((prev) => {
      return { ...prev, ...label, title: label.id };
    });
    setColorPick(label.color);
    setAllDay(label.allDay);
  };

  return (
    <InputContainer>
      <InputForm onSubmit={submitHanbler}>
        <EventFormInput
          label="제목"
          type="text"
          name="title"
          value={title}
          className="title"
          onChange={inputChange}
        />
        <OptionContainer>
          <ToggleSwitch
            switchData={{ title: "종일", type: "allDay" }}
            onSwitchEvent={toggleAllDayHandler}
            allDay={allDay}
          />
          <SelectButton onLabelChange={SelectedLabelHanlder} />
        </OptionContainer>

        <EventFormInput
          label="시작"
          type={allDay ? "date" : "datetime-local"}
          name="start"
          value={start}
          onChange={inputChange}
        />
        {/* <EventFormInput
          label="시작시간"
          type="time"
          name="startTime"
          value={startTime}
          onChange={inputChange}
          disabled={allDay ? true : false}
        /> */}
        <EventFormInput
          label="마침"
          type={allDay ? "date" : "datetime-local"}
          name="end"
          value={end}
          onChange={inputChange}
        />
        {/* <EventFormInput
          label="마침시간"
          type="time"
          name="endTime"
          value={endTime}
          onChange={inputChange}
          disabled={allDay ? true : false}
        /> */}
        <ColorSection>
          <label>Color</label>
          <ColorPicker colorSelected={colorPick} onColorPick={setColorPick} />
        </ColorSection>

        <SubmitBtn type="submit">
          <Check2Circle />
          submit
        </SubmitBtn>
      </InputForm>
    </InputContainer>
  );
}

export default EventInput;
