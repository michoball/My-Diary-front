import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../features/calendar/calendarSlice";
import ColorPicker from "../colorPicker/ColorPicker";
import ToggleSwitch from "../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../UI/selectButton/SelectButton";

import {
  EventEditcontainer,
  EventEditForm,
  ConfirmBtn,
  BtnContainer,
  ColorSection,
  OptionContainer,
  EventFormInput,
  CancelBtn,
} from "./EventEdit.styles";
import { Trash3Fill, XOctagonFill, Check2Circle } from "react-bootstrap-icons";
import TimeConvertor from "../../utill/timeConvertor";
import Modal from "../modal/Modal";

function EventEdit({ eventData, onConfirm }) {
  const dispatch = useDispatch();

  const { start, startStr, end, endStr } = eventData;

  const convertedStart = TimeConvertor(start);
  const convertedEnd = TimeConvertor(end);
  console.log(eventData);

  const [editEvent, setEditEvent] = useState({
    editTitle: eventData.title,
    editStart: eventData.allDay ? startStr : convertedStart,
    editEnd: eventData.allDay ? endStr : convertedEnd,
    color: eventData.backgroundColor,
    allDay: eventData.allDay,
    groupId: eventData.groupId,
  });
  const [colorPick, setColorPick] = useState(eventData.backgroundColor);

  const { editStart, editEnd, editTitle, allDay, groupId } = editEvent;

  const onChangeHandler = (e) => {
    setEditEvent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const eventRemoveHandler = () => {
    // console.log(id);
    dispatch(calendarActions.removeEvent({ id: eventData.id }));
    onConfirm();
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    if (editStart === "") {
      return alert("fill all input");
    }

    dispatch(
      calendarActions.editEvent({
        id: eventData.id,
        groupId,
        title: editTitle,
        start: editStart,
        end: editEnd,
        color: colorPick,
        allDay: allDay,
      })
    );
    onConfirm();
  };

  const SelectedLabelHanlder = (label) => {
    console.log(label);
    setEditEvent((prev) => {
      return { ...prev, ...label };
    });
    console.log(editEvent);
    setColorPick(label.color);
  };

  return (
    <Modal toggleModal={() => onConfirm()}>
      <EventEditcontainer>
        <CancelBtn type="click" onClick={() => onConfirm()}>
          <XOctagonFill />
        </CancelBtn>
        <EventEditForm onSubmit={editSubmitHandler}>
          <OptionContainer>
            <ToggleSwitch
              switchData={{ title: "종일", type: "allDay" }}
              disabled={true}
              allDay={allDay}
            />
            <SelectButton onLabelChange={SelectedLabelHanlder} />
          </OptionContainer>

          <EventFormInput
            label="제목"
            type="text"
            name="editTitle"
            value={editTitle}
            onChange={onChangeHandler}
          />
          <EventFormInput
            label="시작날짜"
            type={allDay ? "date" : "datetime-local"}
            name="editStart"
            value={editStart}
            onChange={onChangeHandler}
          />
          <EventFormInput
            label="마침날짜"
            type={allDay ? "date" : "datetime-local"}
            name="editEnd"
            value={editEnd}
            onChange={onChangeHandler}
          />

          <ColorSection>
            <label>Color</label>
            <ColorPicker colorSelected={colorPick} onColorPick={setColorPick} />
          </ColorSection>
          <BtnContainer>
            <ConfirmBtn type="submit">
              <Check2Circle />
              confirm
            </ConfirmBtn>
            <ConfirmBtn
              className="delete"
              type="click"
              onClick={eventRemoveHandler}
            >
              <Trash3Fill /> Delete
            </ConfirmBtn>
          </BtnContainer>
        </EventEditForm>
      </EventEditcontainer>
    </Modal>
  );
}

export default EventEdit;
