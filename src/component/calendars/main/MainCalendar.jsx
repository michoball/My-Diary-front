import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCalendarEvents,
  selectEditEvent,
} from "../../../features/calendar/calendar.select";
import { calendarActions } from "../../../features/calendar/calendarSlice";
import {
  DefaultCalendar,
  CALENDAR_VIEW_STYLE,
} from "../../../utill/calendar/Calendar.config";
import { v4 as uuidv4 } from "uuid";

import CreateButton from "../../createButton/CreateButton";
import EventEdit from "../../eventEdit/EventEdit";

import { TimeRecurConvertor } from "../../../utill/timeConvertor";

import { ThreeDots, CalendarX } from "react-bootstrap-icons";
import {
  CalendarContainer,
  CalendarView,
  CalendarWrapper,
  ButtonContainer,
  BanButton,
} from "./MainCalendar.styles";
import { Backdrop } from "../../modal/Modal";

function MyCalendar() {
  const [isEditFrom, setIsEditFrom] = useState(false);
  const [selectable, setSelectable] = useState(false);

  const eventList = useSelector(selectCalendarEvents);
  const selectedEvent = useSelector(selectEditEvent);

  // const calendarRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedEvent) {
      console.log(selectedEvent);
    }
  }, [selectedEvent]);

  const handleEventClick = (event) => {
    const eventData = event.event;
    dispatch(calendarActions.selectEvent({ id: eventData.id }));
    setIsEditFrom(!isEditFrom);
  };

  const eventChangehandler = (e) => {
    const { id, title, startStr, endStr, allDay, backgroundColor } = e.event;
    const advenceData = eventDataChanger(e.event);

    dispatch(
      calendarActions.editEvent({
        id,
        title,
        start: startStr,
        end: endStr,
        allDay: allDay,
        color: backgroundColor,
        ...advenceData,
      })
    );
  };

  const eventDataChanger = (data) => {
    const recurringData = data._def.recurringDef?.typeData;

    return recurringData
      ? {
          daysOfWeek: [new Date(data.startStr).getDay().toString()],
          endRecur: TimeRecurConvertor(recurringData?.endRecur),
          startRecur: TimeRecurConvertor(recurringData?.startRecur),
        }
      : null;
  };

  const handleSelectHandler = (event) => {
    const { startStr, endStr } = event;
    if (window.confirm("Are you sure ? ")) {
      dispatch(
        calendarActions.addEvent({
          id: uuidv4(),
          start: startStr,
          end: endStr,
          color: "#ff9f89",
          allDay: true,
          overlap: false,
          display: "background",
        })
      );
    }
  };

  const moreLinkIconHandler = (event) => {
    event.text = <ThreeDots />;
  };

  // const headerContentHandler = (e) => {
  //   //생성한 event들이 처음 달력에 mount될 때
  //   // console.log(e);
  // };
  // 캘린더 api 다루기
  // const onChangelistVeiw = (viewstyle) => {
  //   let calendarApi = calendarRef.current.getApi();
  //   calendarApi.changeView(viewstyle);
  // };

  return (
    <>
      {isEditFrom && <EventEdit onConfirm={() => setIsEditFrom(!isEditFrom)} />}
      {selectable && (
        <Backdrop onToggleModal={() => setSelectable(!selectable)} />
      )}
      <CalendarWrapper zvalue={selectable ? 15 : 0}>
        <CalendarView>
          <CalendarContainer>
            <ButtonContainer>
              <BanButton
                type="click"
                onClick={() => setSelectable(!selectable)}
              >
                <CalendarX />
              </BanButton>
              <CreateButton />
            </ButtonContainer>

            <DefaultCalendar
              initialView={CALENDAR_VIEW_STYLE.calender.initialView}
              headerToolbar={CALENDAR_VIEW_STYLE.calender.headerToolbar}
              // 요일 칸 클릭
              selectable={selectable}
              select={handleSelectHandler}
              displayEventTime={false}
              allDaySlot={false}
              eventClick={handleEventClick}
              events={eventList}
              eventChange={eventChangehandler}
              editable={true}
              navLinks={true}
              moreLinkContent={moreLinkIconHandler}
              // dayHeaderDidMount={headerContentHandler}
              // ref={calendarRef}
            />
          </CalendarContainer>
        </CalendarView>
      </CalendarWrapper>
    </>
  );
}

export default MyCalendar;
