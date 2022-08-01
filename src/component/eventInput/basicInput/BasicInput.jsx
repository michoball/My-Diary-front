import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import { selectSelectedLabel } from "../../../features/customLabel/customLabel.select";
import { selectEditEvent } from "../../../features/calendar/calendar.select";

import { v4 as uuidv4 } from "uuid";
import FormInput from "../../../UI/formInput/FormInput";
import ColorPicker from "../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";

import { Check2Circle } from "react-bootstrap-icons";
import {
  InputForm,
  SubmitBtn,
  ColorSection,
  OptionContainer,
  BtnContainer,
  EventInputContainer,
  BasicInputBg,
} from "../EventInput.styles";

const defaultEvent = {
  groupId: "",
  title: "",
  start: "",
  end: "",
  eventStartTime: "",
  eventEndTime: "",
  color: "#f44336",
  allDay: false,
};

function BasicInput() {
  const [basicEventData, setBasicEventData] = useState(defaultEvent);
  const [isDisable, setIsDisable] = useState(false);

  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);

  const { title, start, end, color, allDay, eventStartTime, eventEndTime } =
    basicEventData;

  useEffect(() => {
    if (selectedLabel) {
      setBasicEventData((prev) => {
        return {
          ...prev,
          ...selectedLabel,
        };
      });
      setIsDisable(true);
    }
  }, [selectedLabel]);

  const inputChangeHandler = (e) => {
    setBasicEventData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setBasicEventData((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };

  const colorChangeHandler = (color) => {
    setBasicEventData((prev) => {
      return { ...prev, color: color };
    });
  };

  const defaultSetting = () => {
    setBasicEventData(defaultEvent);
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (title === "" || start === "" || end === "") {
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    const startSet = allDay ? start : start + "T" + eventStartTime;
    const endSet = allDay ? end + "T24:00" : end + "T" + eventEndTime;
    try {
      dispatch(
        calendarActions.addEvent({
          ...basicEventData,
          id: uuidv4(),
          end: endSet,
          start: startSet,
        })
      );
    } catch (error) {
      alert("something went wrong~!", error);
    }

    defaultSetting();
    alert("정상적으로 일정이 만들어졌습니다. ");
  };

  return (
    <InputForm onSubmit={submitHanbler}>
      <EventInputContainer>
        <BasicInputBg>
          <FormInput
            label="제목"
            type="text"
            name="title"
            value={title}
            onChange={inputChangeHandler}
          />

          <FormInput
            label="시작"
            type="date"
            name="start"
            value={start}
            onChange={inputChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventStartTime"
            value={eventStartTime}
            onChange={inputChangeHandler}
            disabled={allDay ? true : false}
          />
          <FormInput
            label="마침"
            type="date"
            name="end"
            value={end}
            onChange={inputChangeHandler}
          />
          <FormInput
            className="time"
            label=""
            type="time"
            name="eventEndTime"
            value={eventEndTime}
            onChange={inputChangeHandler}
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
              disable={isDisable ? true : false}
              onColorPick={colorChangeHandler}
            />
          </ColorSection>
        </OptionContainer>
      </EventInputContainer>
      <BtnContainer>
        <SubmitBtn type="submit">
          <Check2Circle />
          submit
        </SubmitBtn>
      </BtnContainer>
    </InputForm>
  );
}

export default BasicInput;
