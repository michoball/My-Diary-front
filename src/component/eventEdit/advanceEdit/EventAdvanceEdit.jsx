import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import { selectSelectedLabel } from "../../../features/customLabel/customLabel.select";
import { selectEditEvent } from "../../../features/calendar/calendar.select";
import { customLabelActions } from "../../../features/customLabel/customLabelSlice";
import FormInput from "../../../UI/formInput/FormInput";
import DayPicker from "../../dayPicker/DayPicker";
import ColorPicker from "../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";

import {
  EventEditForm,
  ConfirmBtn,
  ColorSection,
  OptionContainer,
  BtnContainer,
  EditInputContainer,
  BasicInputBg,
} from "../EventEdit.styles";
import { Trash3Fill, Check2Circle } from "react-bootstrap-icons";
import { TimeConvertor } from "../../../utill/timeConvertor";

const advanceEvent = {
  id: "",
  groupId: "",
  title: "",
  color: "#f44336",
  allDay: false,
  daysOfWeek: [],
  startRecur: "",
  endRecur: "",
  startTime: "",
  endTime: "",
};

function EventAdvanceEdit({ onConfirm }) {
  const [advancedEventData, setAdvancedEventData] = useState(advanceEvent);
  const [isDisable, setIsDisable] = useState(false);
  const {
    id,
    startRecur,
    endRecur,
    title,
    startTime,
    endTime,
    color,
    allDay,
    daysOfWeek,
  } = advancedEventData;
  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);
  const selectEvent = useSelector(selectEditEvent);

  useEffect(() => {
    if (selectEvent.groupId.length !== 0) {
      dispatch(customLabelActions.selectLabel(selectEvent.groupId));
    }
    setAdvancedEventData((prev) => ({
      ...prev,
      ...selectEvent,
      endRecur: TimeConvertor(selectEvent.endRecur),
    }));
  }, [selectEvent, dispatch]);

  useEffect(() => {
    if (selectedLabel) {
      setAdvancedEventData((prev) => {
        return {
          ...prev,
          ...selectedLabel,
        };
      });
      setIsDisable(true);
    }
  }, [selectedLabel]);

  const selectedDay = (day) => {
    setAdvancedEventData((prev) => {
      return { ...prev, daysOfWeek: [...day] };
    });
  };

  const onChangeHandler = (e) => {
    setAdvancedEventData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const eventRemoveHandler = () => {
    dispatch(calendarActions.removeEvent({ id }));
    onConfirm();
  };

  const colorChangeHandler = (color) => {
    setAdvancedEventData((prev) => {
      return { ...prev, color: color };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setAdvancedEventData((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (
      title === "" ||
      startRecur === "" ||
      endRecur === "" ||
      daysOfWeek.length === 0
    ) {
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    try {
      const endSet = allDay ? endRecur + "T24:00" : endRecur;

      dispatch(
        calendarActions.addEvent({
          ...advancedEventData,
          end: endSet,
        })
      );
    } catch (error) {
      alert("something went wrong~!", error);
    }
    alert("정상적으로 일정이 만들어졌습니다. ");
    onConfirm();
  };

  return (
    <EventEditForm onSubmit={submitHanbler}>
      <EditInputContainer>
        <BasicInputBg>
          <FormInput
            label="제목"
            type="text"
            name="title"
            value={title}
            className="title"
            onChange={onChangeHandler}
          />

          <FormInput
            label="기간"
            type="date"
            name="startRecur"
            value={startRecur}
            onChange={onChangeHandler}
          />
          <FormInput
            className="time"
            label="~"
            type="date"
            name="endRecur"
            value={endRecur}
            onChange={onChangeHandler}
          />
          <FormInput
            label="시작"
            type="time"
            name="startTime"
            value={startTime}
            onChange={onChangeHandler}
            disabled={allDay ? true : false}
          />
          <FormInput
            className="time"
            label="~"
            type="time"
            name="endTime"
            value={endTime}
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
          <DayPicker onSelecteDay={selectedDay} />
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
  );
}

export default EventAdvanceEdit;
