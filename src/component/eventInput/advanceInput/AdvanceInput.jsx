import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import { selectSelectedLabel } from "../../../features/customLabel/customLabel.select";

import FormInput from "../../../UI/formInput/FormInput";
import DayPicker from "../../dayPicker/DayPicker";
import { v4 as uuidv4 } from "uuid";
import ColorPicker from "../../colorPicker/ColorPicker";
import ToggleSwitch from "../../../UI/toggleSwitch/ToggleSwitch";
import SelectButton from "../../selectButton/SelectButton";

import {
  InputForm,
  SubmitBtn,
  ColorSection,
  OptionContainer,
  BtnContainer,
  EventInputContainer,
  BasicInputBg,
} from "../EventInput.styles";
import { Check2Circle } from "react-bootstrap-icons";

const advanceEvent = {
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

function AdvanceInput() {
  const [advancedEventData, setAdvancedEventData] = useState(advanceEvent);
  const [isDisable, setIsDisable] = useState(false);
  const {
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

  useEffect(() => {
    if (selectedLabel) {
      SelectedLabelHanlder(selectedLabel);
      setIsDisable(true);
    }
  }, [selectedLabel]);

  const SelectedLabelHanlder = (label) => {
    setAdvancedEventData((prev) => {
      return {
        ...prev,
        ...label,
      };
    });
  };

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

  const allDayChangeHandler = (isAllDay) => {
    setAdvancedEventData((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };

  const ColorChangeHandler = (color) => {
    setAdvancedEventData((prev) => {
      return { ...prev, color: color };
    });
  };

  const defaultSetting = () => {
    setAdvancedEventData(advanceEvent);
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (
      title === "" ||
      startRecur === "" ||
      endRecur === "" ||
      daysOfWeek.length === 0
    ) {
      console.log(
        "title : ",
        title,
        "sRecur: ",
        startRecur,
        "eRecur :",
        endRecur,
        "dayofweek : ",
        daysOfWeek
      );
      return alert("일정에 필요한 정보가 부족합니다.");
    }
    try {
      dispatch(
        calendarActions.addEvent({
          ...advancedEventData,
          id: uuidv4(),
          endRecur: endRecur + "T24:00",
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
              onColorPick={ColorChangeHandler}
              disable={isDisable ? true : false}
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

export default AdvanceInput;
