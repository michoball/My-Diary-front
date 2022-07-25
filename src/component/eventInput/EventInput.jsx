import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputContainer, InputForm } from "./EventInput.styles";
import { calendarAction } from "../../features/calendar/calendarSlice";
import { v4 as uuidv4 } from "uuid";
import ColorPicker from "../colorPicker/ColorPicker";
import FormInput from "../../UI/formInput/FormInput";

import { Check2Circle } from "react-bootstrap-icons";

const defaultEvent = {
  groupId: "",
  title: "",
  start: "",
  end: "",
  color: "",
};

function EventInput({ onConfirm }) {
  const [newEvent, setNewEvent] = useState(defaultEvent);
  const [colorPick, setColorPick] = useState("");
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
      calendarAction.addEvent({
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
  return (
    <InputContainer>
      <InputForm onSubmit={submitHanbler}>
        <FormInput
          label="제목"
          type="text"
          name="title"
          value={title}
          onChange={inputChange}
        />
        <label htmlFor="allday">종일 : {allDay ? "true" : "false"} </label>
        <button type="button" onClick={() => setAllDay(!allDay)}>
          클릭
        </button>
        <FormInput
          label="시작"
          type={allDay ? "date" : "datetime-local"}
          name="start"
          value={start}
          onChange={inputChange}
        />
        {/* <FormInput
          label="시작시간"
          type="time"
          name="startTime"
          value={startTime}
          onChange={inputChange}
          disabled={allDay ? true : false}
        /> */}
        <FormInput
          label="마침"
          type={allDay ? "date" : "datetime-local"}
          name="end"
          value={end}
          onChange={inputChange}
        />
        {/* <FormInput
          label="마침시간"
          type="time"
          name="endTime"
          value={endTime}
          onChange={inputChange}
          disabled={allDay ? true : false}
        /> */}

        <ColorPicker onColorPick={setColorPick} />
        <button type="submit">
          <Check2Circle />
          submit
        </button>
      </InputForm>
    </InputContainer>
  );
}

export default EventInput;
