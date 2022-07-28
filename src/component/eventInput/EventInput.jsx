import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Modal from "../modal/Modal";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";

const defaultEvent = {
  groupId: "",
  title: "",
  start: "",
  end: "",
  color: "#f44336",
  allDay: false,
};

function EventInput({ onConfirm }) {
  const [newEvent, setNewEvent] = useState(defaultEvent);
  const dispatch = useDispatch();
  const selectedLabel = useSelector(selectSelectedLabel);

  const { title, start, end, color, allDay } = newEvent;

  useEffect(() => {
    if (selectedLabel) {
      SelectedLabelHanlder(selectedLabel);
    }
  }, [selectedLabel]);

  const inputChangeHandler = (e) => {
    setNewEvent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setNewEvent((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };
  const ColorChangeHandler = (color) => {
    setNewEvent((prev) => {
      return { ...prev, color: color };
    });
  };

  const SelectedLabelHanlder = (label) => {
    setNewEvent((prev) => {
      return { ...prev, ...label, title: label.groupTitle };
    });
  };

  const defaultSetting = () => {
    setNewEvent(defaultEvent);
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (title === "" || start === "" || end === "") {
      return alert("이벤트를 입력하시오");
    }

    const endSet = allDay ? end + "T24:00" : end;

    dispatch(
      calendarActions.addEvent({ ...newEvent, id: uuidv4(), end: endSet })
    );
    onConfirm();
    defaultSetting();
  };

  return (
    <Modal
      onClick={defaultSetting}
      toggleModal={() => {
        onConfirm();
      }}
    >
      <InputContainer>
        <InputForm onSubmit={submitHanbler}>
          <EventFormInput
            label="제목"
            type="text"
            name="title"
            value={title}
            className="title"
            onChange={inputChangeHandler}
          />
          <OptionContainer>
            <ToggleSwitch
              title="종일"
              type="allDay"
              onSwitchEvent={allDayChangeHandler}
              allDay={allDay}
            />
            <SelectButton />
          </OptionContainer>

          <EventFormInput
            label="시작"
            type={allDay ? "date" : "datetime-local"}
            name="start"
            value={start}
            onChange={inputChangeHandler}
          />
          <EventFormInput
            label="마침"
            type={allDay ? "date" : "datetime-local"}
            name="end"
            value={end}
            onChange={inputChangeHandler}
          />
          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              onColorPick={ColorChangeHandler}
            />
          </ColorSection>

          <SubmitBtn type="submit">
            <Check2Circle />
            submit
          </SubmitBtn>
        </InputForm>
      </InputContainer>
    </Modal>
  );
}

export default EventInput;
