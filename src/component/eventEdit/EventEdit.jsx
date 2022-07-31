import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../features/calendar/calendarSlice";
import ColorPicker from "../colorPicker/ColorPicker";
import ToggleSwitch from "../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../selectButton/SelectButton";
import FormInput from "../../UI/formInput/FormInput";

import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
import {
  EventEditcontainer,
  EventEditForm,
  ConfirmBtn,
  BtnContainer,
  ColorSection,
  OptionContainer,
  CancelBtn,
  BasicInput,
  EditInputContainer,
  AdvanceInput,
} from "./EventEdit.styles";
import { Trash3Fill, X, Check2Circle } from "react-bootstrap-icons";
import { TimeConvertor } from "../../utill/timeConvertor";
import Modal from "../modal/Modal";

function EventEdit({ eventData, onConfirm }) {
  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  // 편집할 input에 따른 label 태그 바꾸기
  useEffect(() => {
    dispatch(customLabelActions.selectLabel(eventData.groupId));
  }, [eventData.groupId, dispatch]);

  // label 태그가 바뀜에 따른 editEvent state값 변화
  useEffect(() => {
    if (selectedLabel) {
      SelectedLabelHanlder(selectedLabel);
    }
  }, [selectedLabel]);

  console.log(eventData);

  const { start, startStr, end, endStr } = eventData;

  const [editEvent, setEditEvent] = useState({
    editTitle: eventData.title,
    editStart: eventData.allDay ? startStr : TimeConvertor(start),
    editEnd: eventData.allDay ? endStr : TimeConvertor(end),
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
    setEditEvent((prev) => {
      return { ...prev, ...label };
    });
    setColorPick(label.color);
  };

  return (
    <Modal toggleModal={() => onConfirm()}>
      <CancelBtn type="click" onClick={() => onConfirm()}>
        <X />
      </CancelBtn>
      <EventEditcontainer>
        <EventEditForm onSubmit={editSubmitHandler}>
          <EditInputContainer>
            <BasicInput>
              <FormInput
                label="제목"
                type="text"
                name="editTitle"
                value={editTitle}
                onChange={onChangeHandler}
              />

              <FormInput
                label="시작"
                type={allDay ? "date" : "datetime-local"}
                name="editStart"
                value={editStart}
                onChange={onChangeHandler}
              />
              <FormInput
                label="마침"
                type={allDay ? "date" : "datetime-local"}
                name="editEnd"
                value={editEnd}
                onChange={onChangeHandler}
              />

              <ColorSection>
                <label>Color</label>
                <ColorPicker
                  colorSelected={colorPick}
                  onColorPick={setColorPick}
                  disable={true}
                />
              </ColorSection>
            </BasicInput>
            <AdvanceInput>
              <OptionContainer>
                <ToggleSwitch
                  title="종일"
                  type="allDay"
                  disabled={true}
                  toggleValue={allDay}
                />
                <SelectButton />
              </OptionContainer>
            </AdvanceInput>
          </EditInputContainer>

          <BtnContainer>
            <ConfirmBtn type="submit">
              <Check2Circle />
              Confirm
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
