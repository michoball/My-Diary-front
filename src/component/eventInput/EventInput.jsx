import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";

import AdvanceInput from "./advanceInput/AdvanceInput";
import BasicInput from "./basicInput/BasicInput";
import Modal from "../modal/Modal";
import Button, { BUTTON_TYPE_CLASSES } from "../../UI/button/button";

import { X } from "react-bootstrap-icons";

import {
  EventToggerContainer,
  EventCreatorContainer,
  EventTogger,
} from "./EventInput.styles";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
function EventInput({ onConfirm }) {
  const [isRecurrEvent, setIsRecurrEvent] = useState(false);
  const selectedLabel = useSelector(selectSelectedLabel);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedLabel) {
      setIsRecurrEvent(selectedLabel.daysOfWeek ? true : false);
    }
  }, [selectedLabel]);

  const toggerClickHanndler = (bool) => {
    setIsRecurrEvent(bool);
  };

  const OffModalHandler = () => {
    dispatch(customLabelActions.clearLabel());
    onConfirm();
  };

  return (
    <Modal toggleModal={OffModalHandler}>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.cancel}
        type="click"
        onClick={OffModalHandler}
      >
        <X />
      </Button>
      <EventCreatorContainer>
        <EventToggerContainer>
          <EventTogger
            className={isRecurrEvent ? "" : "active"}
            onClick={toggerClickHanndler.bind(null, false)}
            disabled={selectedLabel ? true : false}
          >
            일일
          </EventTogger>
          <EventTogger
            className={isRecurrEvent ? "active" : ""}
            onClick={toggerClickHanndler.bind(null, true)}
            disabled={selectedLabel ? true : false}
          >
            정기
          </EventTogger>
        </EventToggerContainer>
        {isRecurrEvent ? <AdvanceInput /> : <BasicInput />}
      </EventCreatorContainer>
    </Modal>
  );
}

export default EventInput;
