import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCalendarEvents } from "../../../features/calendar/calendar.select";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import {
  DefaultCalendar,
  CALENDAR_VIEW_STYLE,
} from "../../../utill/calendar/Calendar.config";
import { v4 as uuidv4 } from "uuid";

import { Backdrop } from "../../modal/Modal";
import EventEdit from "../../eventEdit/EventEdit";
import EventInput from "../../eventInput/EventInput";
import Button, { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";
import { EndDayConvertor } from "../../../utill/timeConvertor";

import { ThreeDots, CalendarX, PlusCircle } from "react-bootstrap-icons";
import {
  CalendarContainer,
  CalendarView,
  CalendarWrapper,
  ButtonContainer,
} from "./MainCalendar.styles";

const banEvent = {
  id: "",
  labelId: "Ban",
  start: "",
  end: "",
  color: "#ff9f89",
  allDay: true,
  overlap: false,
  display: "background",
};

function MyCalendar() {
  const [isEditFrom, setIsEditFrom] = useState(false);
  const [selectable, setSelectable] = useState(false);
  const [isInputFrom, setIsInputFrom] = useState(false);

  const eventList = useSelector(selectCalendarEvents);
  const dispatch = useDispatch();

  const handleEventClick = (event) => {
    if (selectable) {
      return null;
    }
    const eventData = event.event;
    dispatch(calendarActions.selectEvent({ id: eventData.id }));
    setIsEditFrom(!isEditFrom);
  };

  const eventChangehandler = (e) => {
    console.log(e);
    const { id, startStr, endStr, allDay } = e.event;
    const advenceData = e.event._def.recurringDef && {
      daysOfWeek: [new Date(startStr).getDay().toString()],
    };

    dispatch(
      calendarActions.addEvent({
        id,
        start: startStr,
        end: allDay ? EndDayConvertor(endStr) : endStr,
        allDay: allDay,
        ...advenceData,
      })
    );
  };

  const handleSelectHandler = (event) => {
    const { startStr, endStr } = event;
    if (window.confirm("해당 날짜를 휴일로 지정하시겠습니까? ")) {
      dispatch(
        calendarActions.addEvent({
          ...banEvent,
          id: uuidv4(),
          start: startStr,
          end: endStr,
        })
      );
    }
  };

  const toggleModalTypeHandler = (type) => {
    switch (type) {
      case "INPUT":
        if (selectable) {
          return null;
        }
        return setIsInputFrom(!isInputFrom);
      case "EDIT":
        return setIsEditFrom(!isEditFrom);
      case "BAN":
        return setSelectable(!selectable);
      default:
        break;
    }
  };

  const moreLinkIconHandler = (event) => {
    event.text = <ThreeDots />;
  };

  return (
    <>
      {isInputFrom && (
        <EventInput onConfirm={toggleModalTypeHandler.bind(null, "INPUT")} />
      )}
      {isEditFrom && (
        <EventEdit onConfirm={toggleModalTypeHandler.bind(null, "EDIT")} />
      )}
      {selectable && (
        <Backdrop onToggleModal={toggleModalTypeHandler.bind(null, "BAN")} />
      )}
      <CalendarWrapper zvalue={selectable ? 15 : 0}>
        <CalendarView>
          <CalendarContainer>
            <ButtonContainer>
              <Button
                type="click"
                buttonType={BUTTON_TYPE_CLASSES.ban}
                onClick={toggleModalTypeHandler.bind(null, "BAN")}
              >
                <CalendarX />
              </Button>
              <Button
                type="click"
                buttonType={BUTTON_TYPE_CLASSES.create}
                onClick={toggleModalTypeHandler.bind(null, "INPUT")}
              >
                <PlusCircle /> Create
              </Button>
            </ButtonContainer>

            <DefaultCalendar
              initialView={CALENDAR_VIEW_STYLE.calender.initialView}
              headerToolbar={CALENDAR_VIEW_STYLE.calender.headerToolbar}
              selectable={selectable}
              select={handleSelectHandler}
              displayEventTime={false}
              eventClick={handleEventClick}
              events={eventList}
              eventChange={eventChangehandler}
              editable={true}
              navLinks={true}
              dayMaxEvents={true}
              moreLinkContent={moreLinkIconHandler}
            />
          </CalendarContainer>
        </CalendarView>
      </CalendarWrapper>
    </>
  );
}

export default MyCalendar;
