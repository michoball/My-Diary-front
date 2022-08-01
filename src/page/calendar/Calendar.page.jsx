import MainCalendar from "../../component/calendars/main/MainCalendar";
import SideBar from "../../component/sidebar/SideBar";
import { CalendarPageContainer } from "./Calendar.page.style";

function Calendar() {
  return (
    <CalendarPageContainer>
      <SideBar />
      <MainCalendar />
    </CalendarPageContainer>
  );
}

export default Calendar;
