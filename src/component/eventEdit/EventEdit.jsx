import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectEditEvent } from "../../features/calendar/calendar.select";

import Modal from "../modal/Modal";
import { X } from "react-bootstrap-icons";
import Button, { BUTTON_TYPE_CLASSES } from "../../UI/button/button";

import {
  EventToggerContainer,
  EventEditcontainer,
  EventTogger,
} from "./EventEdit.styles";
import EventAdvanceEdit from "./advanceEdit/EventAdvanceEdit";

import EventBasicEdit from "./basicEdit/EventBasicEdit";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
import { calendarActions } from "../../features/calendar/calendarSlice";

function EventEdit({ onConfirm }) {
  const [isRecurrEvent, setIsRecurrEvent] = useState(false);
  const dispatch = useDispatch();
  const selectEvent = useSelector(selectEditEvent);

  useEffect(() => {
    if (selectEvent) {
      setIsRecurrEvent(selectEvent.daysOfWeek ? true : false);
    }
  }, []);

  const toggerClickHanndler = (bool) => {
    setIsRecurrEvent(bool);
  };

  const OffModalHandler = () => {
    dispatch(calendarActions.clearSelectEvent());
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
      <EventEditcontainer>
        <EventToggerContainer>
          <EventTogger
            className={isRecurrEvent ? "" : "active"}
            onClick={toggerClickHanndler.bind(null, false)}
            disabled={isRecurrEvent ? true : false}
          >
            일일
          </EventTogger>
          <EventTogger
            className={isRecurrEvent ? "active" : ""}
            onClick={toggerClickHanndler.bind(null, true)}
            disabled={isRecurrEvent ? false : true}
          >
            정기
          </EventTogger>
        </EventToggerContainer>
        {isRecurrEvent ? (
          <EventAdvanceEdit confirm={OffModalHandler} />
        ) : (
          <EventBasicEdit confirm={OffModalHandler} />
        )}
      </EventEditcontainer>
    </Modal>
  );
}

export default EventEdit;
