import React from "react";
import { DefaultCalendar } from "../../UI/calendar/Calendar.config";
import { useSelector } from "react-redux";
import { selectCalendar } from "../../features/calendar/calendarSlice.select";

import { HomeCalendar, HomeContainer, CalendarWrapper } from "./Home.styles";

function Home() {
  const { eventList } = useSelector(selectCalendar);

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
