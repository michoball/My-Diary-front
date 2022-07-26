import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCalendar } from "../../../features/calendar/calendar.select";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import {
  DefaultCalendar,
  CALENDAR_VIEW_STYLE,
} from "../../../utill/calendar/Calendar.config";

import CreateButton from "../../createButton/CreateButton";
import EventEdit from "../../eventEdit/EventEdit";
import Modal from "../../modal/Modal";
import { v4 as uuidv4 } from "uuid";

import {
  CalendarContainer,
  CalendarView,
  CalendarWrapper,
} from "./MainCalendar.styles";

function MyCalendar() {
  const { eventList } = useSelector(selectCalendar);
  const [isEditFrom, setIsEditFrom] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectable, setSelectable] = useState(true);
  const calendarRef = useRef(null);
  const dispatch = useDispatch();

  const handleEventClick = (event) => {
    const eventData = event.event;

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
      calendarActions.editEvent({
        id,
        title,
        start: startStr,
        end: endStr,
        allDay: allDay ? allDay : "",
        color: backgroundColor === "" ? "" : backgroundColor,
      })
    );
  };

  // background event 하려고 만든 기능 but 필요 x
  // const handleSelect = (e) => {
  //   const { allDay, endStr, startStr } = e;
  //   if (window.confirm("Are you sure ?? ")) {
  //     dispatch(
  //       calendarActions.addEvent({
  //         id: uuidv4(),
  //         title: "block event",
  //         start: startStr,
  //         end: endStr,
  //         allDay,
  //         color: "#ff9f89",
  //         overlap: false,
  //         display: "background",
  //       })
  //     );
  //     // setSelectable(false);
  //   }
  // };

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
      <CalendarWrapper>
        <CalendarView>
          <CreateButton />
          <CalendarContainer>
            <DefaultCalendar
              initialView={CALENDAR_VIEW_STYLE.calender.initialView}
              headerToolbar={CALENDAR_VIEW_STYLE.calender.headerToolbar}
              selectable={selectable}
              // select={handleSelect}
              allDaySlot={false}
              eventClick={handleEventClick}
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
