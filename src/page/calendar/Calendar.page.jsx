import MainCalendar from "../../component/calendars/main/MainCalendar";
import CalendarSideBar from "../../component/calendarSidebar/CalendarSideBar";
import { CalendarPageContainer } from "./Calendar.page.style";

function Calendar() {
  return (
    <CalendarPageContainer>
      <CalendarSideBar />
      <MainCalendar />
    </CalendarPageContainer>
  );
}

export default Calendar;
