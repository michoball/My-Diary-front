import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCalendar } from "../../../features/calendar/calendarSlice.select";
import { calendarAction } from "../../../features/calendar/calendarSlice";
import {
  DefaultCalendar,
  CALENDAR_VIEW_STYLE,
} from "../../../utill/calendar/Calendar.config";

import EventEdit from "../../eventEdit/EventEdit";
import EventInput from "../../eventInput/EventInput";
import Modal from "../../modal/Modal";

import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "react-bootstrap-icons";
import {
  CalendarContainer,
  CalendarView,
  CalendarWrapper,
  CreateButton,
} from "./MainCalendar.styles";

function MyCalendar() {
  const { eventList } = useSelector(selectCalendar);
  const [isEditFrom, setIsEditFrom] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isInputFrom, setIsInputFrom] = useState(false);
  const [selectable, setSelectable] = useState(false);
  const calendarRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const eventData = event.event;
    console.log(event.event);

    setSelectedEvent(eventData);
    setIsEditFrom(!isEditFrom);
  };

  // 캘린더 api 다루기
  // const onChangelistVeiw = (viewstyle) => {
  //   let calendarApi = calendarRef.current.getApi();
  //   calendarApi.changeView(viewstyle);
  // };

  const eventChangehandler = (e) => {
    const { id, title, startStr, endStr, allDay, backgroundColor } = e.event;
    dispatch(
      calendarAction.editEvent({
        id,
        title,
        start: startStr,
        end: endStr,
        allDay: allDay ? allDay : "",
        color: backgroundColor === "" ? "" : backgroundColor,
      })
    );
  };

  const handleSelect = (e) => {
    const { allDay, endStr, startStr } = e;
    if (window.confirm("Are you sure ?? ")) {
      dispatch(
        calendarAction.addEvent({
          id: uuidv4(),
          title: "block event",
          start: startStr,
          end: endStr,
          allDay,
          color: "#ff9f89",
          overlap: false,
          display: "background",
        })
      );
      setSelectable(false);
    }
  };

  const showInputFromHandler = () => {
    setIsInputFrom(!isInputFrom);
  };

  const headerContentHandler = (e) => {
    // console.log(e);
  };

  return (
    <>
      {isEditFrom && (
        <Modal toggleModal={() => setIsEditFrom(!isEditFrom)}>
          <EventEdit
            eventData={selectedEvent}
            onConfirm={() => setIsEditFrom(!isEditFrom)}
          />
        </Modal>
      )}
      {isInputFrom && (
        <Modal toggleModal={() => setIsInputFrom(!isInputFrom)}>
          <EventInput onConfirm={() => setIsInputFrom(!isInputFrom)} />
        </Modal>
      )}
      <CalendarWrapper>
        <CalendarView>
          <CreateButton type="click" onClick={showInputFromHandler}>
            <PlusCircle /> create
          </CreateButton>
          <CalendarContainer>
            <DefaultCalendar
              initialView={CALENDAR_VIEW_STYLE.calender.initialView}
              headerToolbar={CALENDAR_VIEW_STYLE.calender.headerToolbar}
              selectable={selectable}
              select={handleSelect}
              eventClick={handleClick}
              events={eventList}
              eventChange={eventChangehandler}
              editable={true}
              navLinks={true}
              dayHeaderDidMount={headerContentHandler}
              ref={calendarRef}
            />
          </CalendarContainer>
        </CalendarView>
      </CalendarWrapper>
    </>
  );
}

export default MyCalendar;
