import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import ColorPicker from "../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";
import FormInput from "../../../UI/formInput/FormInput";
import { selectEditEvent } from "../../../features/calendar/calendar.select";

import { selectSelectedLabel } from "../../../features/customLabel/customLabel.select";
import { customLabelActions } from "../../../features/customLabel/customLabelSlice";
import {
  EventEditForm,
  ConfirmBtn,
  BtnContainer,
  ColorSection,
  OptionContainer,
  BasicInputBg,
  EditInputContainer,
} from "../EventEdit.styles";
import { Trash3Fill, Check2Circle } from "react-bootstrap-icons";
import { TimeConvertor } from "../../../utill/timeConvertor";
import { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";

const defaultEvent = {
  id: "",
  groupId: "",
  title: "",
  start: "",
  end: "",
  eventStartTime: "",
  eventEndTime: "",
  color: "#f44336",
  allDay: false,
};

function EventBasicEdit({ confirm }) {
  const [editEvent, setEditEvent] = useState(defaultEvent);
  const [isDisable, setIsDisable] = useState(false);

  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);
  const {
    id,
    title,
    start,
    end,
    color,
    allDay,
    eventStartTime,
    eventEndTime,
    groupId,
  } = editEvent;

  // // 편집할 input에 따른 label 태그 바꾸기
  useEffect(() => {
    if (selectEvent.groupId === "Ban") {
      setIsDisable(true);
    }
    if (selectEvent.allDay) {
      setIsDisable(true);
    }

    setEditEvent((prev) => {
      return {
        ...prev,
        ...selectEvent,
        end: TimeConvertor(selectEvent.end),
        start: TimeConvertor(selectEvent.start),
      };
    });
  }, [selectEvent, dispatch]);

  // label 태그가 바뀜에 따른 editEvent state값 변화
  useEffect(() => {
    if (selectedLabel) {
      if (selectedLabel.groupId === groupId) {
        return;
      }
      if (!selectedLabel.daysOfWeek) {
        setEditEvent((prev) => {
          return { ...prev, ...selectedLabel };
        });
        setIsDisable(true);
        console.log("baseEdit label set");
      }
      if (selectedLabel.daysOfWeek) {
        dispatch(customLabelActions.clearLabel());
        return alert("일일 일정을 정기 일정으로 바꿀 수 없습니다.");
      }
    }
  }, [selectedLabel, groupId, dispatch]);

  const onChangeHandler = (e) => {
    setEditEvent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const eventRemoveHandler = () => {
    dispatch(calendarActions.removeEvent({ id }));
    confirm();
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();

    if ((groupId !== "Ban" && title === "") || start === "" || end === "") {
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    const startSet = allDay ? start : start + "T" + eventStartTime;
    const endSet = allDay ? end + "T24:00" : end + "T" + eventEndTime;
    try {
      dispatch(
        calendarActions.addEvent({
          ...editEvent,
          end: endSet,
          start: startSet,
        })
      );
    } catch (error) {
      alert("something went wrong~!", error);
    }

    alert("일정이 조정되었습니다. ");
    confirm();
  };
  const colorChangeHandler = (color) => {
    setEditEvent((prev) => {
      return { ...prev, color: color };
    });
  };

  const allDayChangeHandler = (allDay) => {
    setEditEvent((prev) => {
      return { ...prev, allDay: allDay };
    });
  };

  return (
    <EventEditForm onSubmit={editSubmitHandler}>
      <EditInputContainer>
        <BasicInputBg>
          <FormInput
            label="제목"
            type="text"
            name="title"
            value={title}
            onChange={onChangeHandler}
            disabled={groupId === "Ban" ? true : false}
          />

          <FormInput
            label="시작"
            type="date"
            name="start"
            value={start}
            onChange={onChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventStartTime"
            value={eventStartTime}
            onChange={onChangeHandler}
            disabled={allDay ? true : false}
          />
          <FormInput
            label="마침"
            type="date"
            name="end"
            value={end}
            onChange={onChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventEndTime"
            value={eventEndTime}
            onChange={onChangeHandler}
            disabled={allDay ? true : false}
          />
        </BasicInputBg>

        <OptionContainer>
          <SelectButton />
          <ToggleSwitch
            title="종일"
            type="allDay"
            disabled={isDisable ? true : false}
            onSwitchEvent={isDisable ? () => {} : allDayChangeHandler}
            toggleValue={allDay}
          />
          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              onColorPick={colorChangeHandler}
              disable={isDisable ? true : false}
            />
          </ColorSection>
        </OptionContainer>
      </EditInputContainer>

      <BtnContainer>
        <ConfirmBtn type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
          <Check2Circle />
          Confirm
        </ConfirmBtn>
        <ConfirmBtn
          className="delete"
          buttonType={BUTTON_TYPE_CLASSES.base}
          type="click"
          onClick={eventRemoveHandler}
        >
          <Trash3Fill /> Delete
        </ConfirmBtn>
      </BtnContainer>
    </EventEditForm>
  );
}

export default EventBasicEdit;
