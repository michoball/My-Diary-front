import MainCalendar from "../../component/calendars/main/MainCalendar";
import SideBar from "../../component/sidebar/SideBar";
import { CalendarPageContainer } from "./Calendar.page.style";
import EventInput from "../../component/eventInput/EventInput";

function Calendar() {
  return (
    <CalendarPageContainer>
      <SideBar />
      <MainCalendar />
      {/* <EventInput /> */}
    </CalendarPageContainer>
  );
}

export default Calendar;
