import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import FormInput from "../../UI/formInput/FormInput";

import ColorPicker from "../colorPicker/ColorPicker";
import ToggleSwitch from "../../UI/toggleSwitch/ToggleSwitch";

import {
  LabelInputcontainer,
  ColorSection,
  AddBtn,
  LabelInputForm,
  AllDayBtn,
  BtnContainer,
} from "./LabelAddForm.styles";

import { Check2Circle, X } from "react-bootstrap-icons";
import Button, { BUTTON_TYPE_CLASSES } from "../../UI/button/button";

import Modal from "../modal/Modal";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";

const defaultLabel = {
  labelTitle: "",
  color: "#f44336",
  allDay: false,
};
const abvancedLabel = {
  daysOfWeek: ["0"],
};

const LabelAddForm = ({ onConfirm }) => {
  const [newLabel, setNewLabel] = useState(defaultLabel);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const dispatch = useDispatch();

  const { labelTitle, color, allDay } = newLabel;

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
  const colorChangeHandler = (color) => {
    setNewLabel((prev) => {
      return { ...prev, color: color };
    });
  };

  const recurrLabelChangeHandler = (recurr) => {
    setIsAdvanced(recurr);
  };

  const defaultSetting = () => {
    setNewLabel(defaultLabel);
  };

  const submitHanbler = (e) => {
    e.preventDefault();

    if (labelTitle === "") {
      return alert("그룹명을 입력하시오");
    }

    try {
      const finalLabel = isAdvanced
        ? { ...newLabel, ...abvancedLabel }
        : newLabel;

      dispatch(
        customLabelActions.addLabel({ labelId: uuidv4(), ...finalLabel })
      );
    } catch (error) {
      alert("Can not make that Label", error);
    }

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
      <Button
        buttonType={BUTTON_TYPE_CLASSES.cancel}
        type="click"
        onClick={() => onConfirm()}
      >
        <X />
      </Button>
      <LabelInputcontainer>
        <LabelInputForm onSubmit={submitHanbler}>
          <FormInput
            label="그룹명"
            type="text"
            name="labelTitle"
            value={labelTitle}
            className="labelTitle"
            onChange={inputChangeHandler}
          />

          <AllDayBtn>
            <ToggleSwitch
              type="allDay"
              title="종일"
              onSwitchEvent={allDayChangeHandler}
              toggleValue={allDay}
            />
            <ToggleSwitch
              type="recurr"
              title="정기 일정"
              onSwitchEvent={recurrLabelChangeHandler}
              toggleValue={isAdvanced}
            />
          </AllDayBtn>

          <ColorSection>
            <label>Color</label>
            <ColorPicker
              colorSelected={color}
              onColorPick={colorChangeHandler}
            />
          </ColorSection>
          <BtnContainer>
            <AddBtn type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
              <Check2Circle />
              Add
            </AddBtn>
          </BtnContainer>
        </LabelInputForm>
      </LabelInputcontainer>
    </Modal>
  );
};

export default LabelAddForm;
