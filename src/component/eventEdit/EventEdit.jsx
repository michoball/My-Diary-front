import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedLabel } from "../../features/customLabel/customLabel.select";
import { selectEditEvent } from "../../features/calendar/calendar.select";

import Modal from "../modal/Modal";
import { X } from "react-bootstrap-icons";

import {
  CancelBtn,
  EventToggerContainer,
  EventEditcontainer,
  EventTogger,
} from "./EventEdit.styles";
import EventBasicEdit from "./basicEdit/EventBasicEdit";
import EventAdvanceEdit from "./advanceEdit/EventAdvanceEdit";

function EventEdit({ onConfirm }) {
  const [isRecurrEvent, setIsRecurrEvent] = useState(false);

  const selectEvent = useSelector(selectEditEvent);

  useEffect(() => {
    if (selectEvent) {
      setIsRecurrEvent(selectEvent.daysOfWeek ? true : false);
    }
  }, [selectEvent]);

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
      <EventEditcontainer>
        <EventToggerContainer>
          <EventTogger
            className={isRecurrEvent ? "" : "active"}
            onClick={toggerClickHanndler.bind(null, false)}
            // disabled={isRecurrEvent ? true : false}
          >
            일일
          </EventTogger>
          <EventTogger
            className={isRecurrEvent ? "active" : ""}
            onClick={toggerClickHanndler.bind(null, true)}
            // disabled={isRecurrEvent ? false: true}
          >
            정기
          </EventTogger>
        </EventToggerContainer>
        {isRecurrEvent ? (
          <EventAdvanceEdit confirm={() => onConfirm()} />
        ) : (
          <EventBasicEdit confirm={() => onConfirm()} />
        )}
      </EventEditcontainer>
    </Modal>
  );
}

export default EventEdit;
