import MyCalendar from "../../component/myCalendar/MyCalendar";
import SideBar from "../../component/sidebar/SideBar";
import { CalendarPageContainer } from "./Calendar.page.style";
import EventInput from "../../component/eventInput/EventInput";

function Calendar() {
  return (
    <CalendarPageContainer>
      <SideBar />
      <MyCalendar />
      <EventInput />
    </CalendarPageContainer>
  );
}

export default Calendar;
