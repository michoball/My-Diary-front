import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import ColorPicker from "../colorPicker/ColorPicker";
import ToggleSwitch from "../../UI/toggleSwitch/ToggleSwitch";

import {
  LabelInputcontainer,
  LabelFormInput,
  ColorSection,
  AddBtn,
  LabelInputForm,
  AllDayBtn,
  CancelBtn,
} from "./LabelAddForm.styles";

import { Check2Circle, X } from "react-bootstrap-icons";

import Modal from "../modal/Modal";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";

const defaultLabel = {
  groupTitle: "",
  color: "#f44336",
  allDay: false,
};

const LabelAddForm = ({ onConfirm }) => {
  const [newLabel, setNewLabel] = useState(defaultLabel);
  const dispatch = useDispatch();

  const { groupTitle, color, allDay } = newLabel;

  const inputChangeHandler = (e) => {
    setNewLabel((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const allDayChangeHandler = (isAllDay) => {
    setNewLabel((prev) => {
      return { ...prev, allDay: isAllDay };
    });
  };
  const ColorChangeHandler = (color) => {
    setNewLabel((prev) => {
      return { ...prev, color: color };
    });
  };

  const defaultSetting = () => {
    setNewLabel(defaultLabel);
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (groupTitle === "") {
      return alert("그룹명을 입력하시오");
    }

    dispatch(customLabelActions.addLabel({ groupId: uuidv4(), ...newLabel }));
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
      <LabelInputcontainer>
        <CancelBtn type="click" onClick={() => onConfirm()}>
          <X />
        </CancelBtn>
        <LabelInputForm onSubmit={submitHanbler}>
          <LabelFormInput
            label="그룹명"
            type="text"
            name="groupTitle"
            value={groupTitle}
            className="groupTitle"
            onChange={inputChangeHandler}
          />

          <AllDayBtn>
            <label htmlFor="종일" className="toggle-label">
              종일
            </label>
            <ToggleSwitch
              type="allDay"
              onSwitchEvent={allDayChangeHandler}
              toggleValue={allDay}
            />
          </AllDayBtn>
          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              onColorPick={ColorChangeHandler}
            />
          </ColorSection>
          <AddBtn type="submit">
            <Check2Circle />
            Add
          </AddBtn>
        </LabelInputForm>
      </LabelInputcontainer>
    </Modal>
  );
};

export default LabelAddForm;
