import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import React from "react";
import { FullCalendarWarpper } from "./Calendar.styles";

export const CALENDAR_VIEW_STYLE = {
  calender: {
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "title",
      center: "prev,next today",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
  },

  list: {
    initialView: "listMonth",
    headerToolbar: {
      left: "title",
      center: "prev,next today",
      right: "listMonth,listWeek,listDay",
    },
  },
};

export const DefaultCalendar = React.forwardRef((props, ref) => {
  return (
    <FullCalendarWarpper>
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin]}
        buttonText={{
          today: "Today",
          month: "월",
          week: "주",
          day: "일",
        }}
        timeZone="UTC"
        // toolbar에 나만의 버튼 생성 버튼 명, 버튼안 글자, 클릭 이벤트 설정
        // customButtons={{
        //   myCustom: {
        //     text: "목록",
        //   },
        // }}
        // locale="ko"
        height="100%"
        businessHours={true}
        titleFormat={{
          year: "numeric",
          month: "short",
          day: "numeric",
        }}
        //일일 초과 일정 more 클릭시 미니 창으로 보기
        dayMaxEvents={true}
        ref={ref}
        {...props}
      />
    </FullCalendarWarpper>
  );
});
