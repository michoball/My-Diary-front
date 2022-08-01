import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";

import AdvanceInput from "./advanceInput/AdvanceInput";
import BasicInput from "./basicInput/BasicInput";
import Modal from "../modal/Modal";
import { X } from "react-bootstrap-icons";

import {
  CancelBtn,
  EventToggerContainer,
  EventCreatorContainer,
  EventTogger,
} from "./EventInput.styles";
function EventInput({ onConfirm }) {
  const [isRecurrEvent, setIsRecurrEvent] = useState(false);
  const selectedLabel = useSelector(selectSelectedLabel);

  useEffect(() => {
    if (selectedLabel) {
      setIsRecurrEvent(selectedLabel.daysOfWeek ? true : false);
    }
  }, [selectedLabel]);

  const toggerClickHanndler = (bool) => {
    setIsRecurrEvent(bool);
  };

  return (
    <Modal
      toggleModal={() => {
        onConfirm();
      }}
    >
      <CancelBtn type="click" onClick={() => onConfirm()}>
        <X />
      </CancelBtn>
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
