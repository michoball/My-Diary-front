import { DefaultCalendar } from "../../../utill/calendar/Calendar.config";
import { ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { selectCalendarEvents } from "../../../features/calendar/calendar.select";

import { SidebarCalendarContainer } from "./SidebarCalendar.styles";
const SidebarCalendar = () => {
  const eventLists = useSelector(selectCalendarEvents);

  const moreLinkIconHandler = (event) => {
    event.text = <ThreeDots />;
  };

  return (
    <SidebarCalendarContainer>
      <DefaultCalendar
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        events={eventLists}
        titleFormat={{
          year: "numeric",
          month: "short",
        }}
        dayMaxEvents={true}
        businessHours={false}
        // eventDidMount={eventTextHandler}
        moreLinkContent={moreLinkIconHandler}
        displayEventTime={false}
      />
    </SidebarCalendarContainer>
  );
};

export default SidebarCalendar;
