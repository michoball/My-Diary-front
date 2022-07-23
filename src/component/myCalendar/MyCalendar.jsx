import { useState, useRef } from "react";
import EventInput from "../eventInput/EventInput";

// import SideBar from "../sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { selectCalendar } from "../../features/calendar/calendarSlice.select";
import Modal from "../modal/Modal";
import { calendarAction } from "../../features/calendar/calendarSlice";
import {
  DefaultCalendar,
  CALENDAR_VIEW_STYLE,
} from "../../UI/calendar/Calendar.config";
import { v4 as uuidv4 } from "uuid";

import EventEdit from "../eventEdit/EventEdit";
import { CalendarContainer, CalendarView } from "./MyCalendar.styles";

function MyCalendar() {
  const { eventList } = useSelector(selectCalendar);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [calendarStyle, setcalendarStyle] = useState(true);
  const [selectable, setSelectable] = useState(false);
  const calendarRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const eventData = event.event;
    console.log(event.event);
    // console.log("JSON : ", event.event);
    setSelectedEvent(eventData);
    setOpenModal(!openModal);
  };

  const onChangelistVeiw = (viewstyle) => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(viewstyle);
  };

  const changeViewStyle = () => {
    setcalendarStyle(!calendarStyle);
    // 캘린더 스타일 boolean 값이 state를 사용하는것이라 바로 바뀐 값으로 적용되지 않아서 한박자
    // 느려서 !calendarStyle로 했음
    onChangelistVeiw(
      !calendarStyle
        ? CALENDAR_VIEW_STYLE.calender.initialView
        : CALENDAR_VIEW_STYLE.list.initialView
    );
  };

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

  return (
    <>
      {openModal && (
        <Modal toggleModal={() => setOpenModal(!openModal)}>
          <EventEdit
            eventData={selectedEvent}
            onConfirm={() => setOpenModal(!openModal)}
          />
        </Modal>
      )}

      <CalendarView>
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
            ref={calendarRef}
          />
        </CalendarContainer>
      </CalendarView>
    </>
  );
}

export default MyCalendar;
