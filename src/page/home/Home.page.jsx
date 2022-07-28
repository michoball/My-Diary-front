import React from "react";
import { DefaultCalendar } from "../../utill/calendar/Calendar.config";
import { useSelector } from "react-redux";
import { selectCalendarEvents } from "../../features/calendar/calendar.select";

import { HomeCalendar, HomeContainer, CalendarWrapper } from "./Home.styles";

function Home() {
  const eventList = useSelector(selectCalendarEvents);

  return (
    <HomeContainer>
      <HomeCalendar>
        <CalendarWrapper>
          <DefaultCalendar
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev",
              center: "title",
              right: "next",
            }}
            events={eventList}
            titleFormat={{
              year: "numeric",
              month: "long",
            }}
            dayMaxEvents={true}
          />
        </CalendarWrapper>
      </HomeCalendar>
    </HomeContainer>
  );
}

export default Home;
