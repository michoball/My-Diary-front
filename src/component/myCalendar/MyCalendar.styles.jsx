import styled from "styled-components";
import { calendarCss } from "../../UI/calendar/Calendar.styles";

export const CalendarView = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  flex: 0.5;
  width: 100%;
  padding: 20px;
  min-width: 900px;
  /* max-width: 1500px; */
  height: calc(100vh - 90px);
  background-color: white;
  border: 2px solid #bbb;
  border-radius: 20px;
`;

export const CalendarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  /* position: absolute;
  right: 30px; */
  .fc-toolbar-title {
    padding-left: 10px;
    font-size: 30px;
  }

  ${calendarCss}
`;
