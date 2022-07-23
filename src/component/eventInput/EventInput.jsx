import { useState } from "react";
import { useDispatch } from "react-redux";
import { InputContainer, InputForm } from "./EventInput.styles";
import { calendarAction } from "../../features/calendar/calendarSlice";
import { v4 as uuidv4 } from "uuid";
import ColorPicker from "../colorPicker/ColorPicker";

import Modal from "../modal/Modal";
import FormInput from "../../UI/formInput/FormInput";

const defaultEvent = {
  id: uuidv4(),
  title: "",
  start: "",
  startTime: "",
  end: "",
  endTime: "",
  color: "",
};

function EventInput() {
  const [newEvent, setNewEvent] = useState(defaultEvent);
  const [colorPick, setColorPick] = useState("");
  const dispatch = useDispatch();
  const { title, start, end, startTime, endTime, id } = newEvent;

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

    const startSet = startTime === "" ? start : start + "T" + startTime;
    const endSet = endTime === "" ? end + "T24:00" : end + "T" + endTime;

    dispatch(
      calendarAction.addEvent({
        id,
        title,
        start: startSet,
        end: endSet,
        color: colorPick,
      })
    );

    setNewEvent(defaultEvent);
  };
  return (
    <InputContainer>
      <InputForm onSubmit={submitHanbler}>
        <label htmlFor="title">제목</label>
        <input type="text" name="title" value={title} onChange={inputChange} />
        <label htmlFor="time">시작날짜</label>
        <input type="date" name="start" value={start} onChange={inputChange} />
        <label htmlFor="time">시작시간</label>
        <input
          type="time"
          name="startTime"
          value={startTime}
          onChange={inputChange}
        />
        <label htmlFor="time">마침날짜</label>
        <input type="date" name="end" value={end} onChange={inputChange} />
        <label htmlFor="time">마침시간</label>
        <input
          type="time"
          name="endTime"
          value={endTime}
          onChange={inputChange}
        />
        <ColorPicker onColorPick={setColorPick} />
        <button type="submit">submit</button>
      </InputForm>
    </InputContainer>
  );
}

export default EventInput;
