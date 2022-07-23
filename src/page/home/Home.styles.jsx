import styled from "styled-components";
import { calendarCss } from "../../UI/calendar/Calendar.styles";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh-70px);
  align-items: center;
  justify-content: center;
`;

export const HomeCalendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 700px;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid #bbb;
  border-radius: 10px;
  background-color: rgba(178, 178, 178, 0.5);
`;

export const CalendarWrapper = styled.div`
  position: relative;
  padding: 10px;

  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  border-radius: 10px;

  ${calendarCss}
`;
