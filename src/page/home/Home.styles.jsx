import styled from "styled-components";
import { calendarCss } from "../../utill/calendar/Calendar.styles";
import { MemoCardContainer } from "../../component/memo/memoCard/MemoCard.styles";
import { Link } from "react-router-dom";
import { border } from "../../global.styles";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  main {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: calc(100vh - 90px);
    min-height: 550px;
    padding: 0 30px 30px;
    background-color: #f3e9e7;
    gap: 30px;

    @media screen and (max-width: 1023px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      height: unset;
    }
    @media screen and (max-width: 767px) {
      h1 {
        font-size: 25px;
      }
    }
  }
`;

export const HomeNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 90px;
  background-color: #f3e9e7;

  svg {
    margin-left: 30px;
    width: 300px;
    fill: #f2727d;
  }
`;

export const HomeCalendar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  min-width: 500px;
  padding: 20px;

  ${border}

  background-color: white;
  @media screen and (max-width: 1023px) {
    width: 90%;
    height: 500px;
  }
`;

export const CalendarWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
  border-radius: 10px;

  ${calendarCss};
  td,
  th {
    border: none;
  }
  th {
    border-right: none;
  }
  .fc-theme-standard .fc-scrollgrid {
    border: none;
    border-radius: 10px;
    overflow: hidden;
  }
  table .fc-col-header .fc-col-header-cell {
    padding: 10px 0;
    height: 35px;
    .fc-col-header-cell-cushion {
      font-size: 20px;
      color: #623933;
    }
    &.fc-day.fc-day-sun {
      .fc-col-header-cell-cushion {
        color: #f23d4c;
      }
    }
  }
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  width: 50%;
  min-width: 500px;

  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    width: 90%;
    gap: 30px;
  }
`;

export const MemosContianer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  ${border}

  padding: 10px 20px;
  height: 55%;
  min-height: 250px;
  width: 100%;

  h1 {
    color: #f2727d;
    margin-top: 10px;
    height: 10%;
  }

  @media screen and (max-width: 1023px) {
    height: 300px;
  }
`;

export const MemosWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 90%;

  ${MemoCardContainer} {
    height: 80%;
    margin: 0 10px;
  }

  header {
    font-size: 14px;
    width: 200px;
  }
`;

export const NavNLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 45%;

  gap: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;
  padding: 10px 20px;
  color: #f2727d;
  background-color: white;
  ${border}

  h1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    h1 {
      justify-content: center;
      margin-bottom: 10px;
      margin-right: 10px;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #623933;
  width: 100%;
  font-size: 25px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  transition: background-color 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: #f3e9e7;
  }

  svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 767px) {
    justify-content: center;
    font-size: 20px;
    margin-bottom: 0;
  }
`;

export const LoginContainer = styled.div`
  width: 60%;
  padding: 10px 20px;

  background-color: white;
  ${border}

  .loading-container {
    height: 30vh;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 220px;
  }
`;
