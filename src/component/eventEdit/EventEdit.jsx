import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarAction } from "../../features/calendar/calendarSlice";
import FormInput from "../../UI/formInput/FormInput";
import ColorPicker from "../colorPicker/ColorPicker";
import { EventEditcontainer, EventEditForm } from "./EventEdit.styles";

import TimeConvertor from "../../utill/timeConvertor";

function EventEdit({ eventData, onConfirm }) {
  const dispatch = useDispatch();

  const { start, end, id, backgroundColor } = eventData;

  const convertedStart = TimeConvertor(start);
  const convertedEnd = TimeConvertor(end);

  const [editEvent, setEditEvent] = useState({
    editTitle: eventData.title,
    editStart: convertedStart.day,
    startTime: convertedStart.time,
    editEnd: convertedEnd.day,
    endTime: convertedEnd.time,
    color: eventData.backgroundColor,
  });
  const [colorPick, setColorPick] = useState(backgroundColor);

  const { editStart, startTime, editEnd, endTime, editTitle } = editEvent;

  const onChangeHandler = (e) => {
    setEditEvent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const eventRemoveHandler = () => {
    console.log(id);
    dispatch(calendarAction.removeEvent({ id }));
    onConfirm();
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    if (editStart === "") {
      return alert("fill all input");
    }
    let startSet =
      startTime === undefined ? editStart : editStart + "T" + startTime;
    let endSet =
      endTime === undefined ? editEnd + "T24:00" : editEnd + "T" + endTime;
    console.log(startSet, endSet);
    dispatch(
      calendarAction.editEvent({
        id,
        title: editTitle,
        start: startSet,
        end: endSet,
        color: colorPick,
        allDay: eventData.allDay ? eventData.allDay : "",
      })
    );
    onConfirm();
  };

  return (
    <EventEditcontainer>
      <div style={{ border: "1px solid black" }}>
        <EventEditForm onSubmit={editSubmitHandler}>
          <FormInput
            label="제목"
            type="text"
            name="editTitle"
            value={editTitle}
            onChange={onChangeHandler}
          />
          <FormInput
            label="시작날짜"
            type="date"
            name="editStart"
            value={editStart}
            onChange={onChangeHandler}
          />
          <FormInput
            label="시작시간"
            type="time"
            name="startTime"
            value={startTime}
            onChange={onChangeHandler}
          />
          <FormInput
            label="마침날짜"
            type="date"
            name="editEnd"
            value={editEnd}
            onChange={onChangeHandler}
          />
          <FormInput
            label="마침시간"
            type="time"
            name="endTime"
            value={endTime}
            onChange={onChangeHandler}
          />
          <ColorPicker onColorPick={setColorPick} />
          <div className="actions" style={{ marginTop: "10px" }}>
            <button type="click" onClick={eventRemoveHandler}>
              remove
            </button>
            <button type="submit">confirm</button>
            <button type="click" onClick={onConfirm}>
              cancel
            </button>
          </div>
        </EventEditForm>
      </div>
    </EventEditcontainer>
  );
}

export default EventEdit;
