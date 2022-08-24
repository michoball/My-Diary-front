import styled from "styled-components";
import { calendarCss } from "../../utill/calendar/Calendar.styles";
import { MemoCardContainer } from "../../component/memo/memoCard/MemoCard.styles";
import { Link } from "react-router-dom";
import { rotation, border } from "../../global.styles";

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
    height: calc(100vh - 123px);
    min-height: 550px;
    padding: 20px;
    background-color: #d2d2d2;
    gap: 20px;
  }
`;

export const HomeNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 120px;
  background-color: white;

  border-bottom: 3px solid #bbb;

  svg {
    width: 450px;
    fill: #f2727d;
    padding: 5px;
    border: 2px solid #f2727d;
    border-radius: 10px;

    ${rotation} {
      box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const HomeCalendar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50%;
  min-width: 500px;

  margin-top: 20px;
  padding: 10px;

  ${border}
  ${rotation}

  background-color: rgb(255, 255, 255);
`;

export const CalendarWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
  border-radius: 10px;

  ${calendarCss};
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  margin-top: 20px;
  width: 50%;
  min-width: 500px;
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
  ${rotation}

  h2 {
    margin-bottom: 10px;
    height: 10%;
  }
`;

export const MemosWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 90%;

  ${MemoCardContainer} {
    height: 170px !important;
    margin: 0 10px;
    box-shadow: -2px -2px 0 rgba(0, 0, 0, 0.4);

    :hover {
      box-shadow: -2px -2px 0 rgba(0, 0, 0, 0.4),
        -3px -1px 5px rgba(0, 0, 0, 0.5);
    }
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

  gap: 10px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 40%;
  padding: 10px;

  background-color: white;
  ${border}
  ${rotation}
  h2 {
    width: 100%;
    text-align: center;
    padding: 0 0 10px;
    border-bottom: 2px solid #d2d2d2;
    margin-bottom: 20px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;

  transition: box-shadow 0.2s ease-in, background-color 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: rgba(210, 210, 210, 0.5);
    box-shadow: -4px -2px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-1px);
  }

  svg {
    margin-right: 10px;
  }
`;

export const LoginContainer = styled.div`
  width: 60%;
  padding: 10px 20px;

  background-color: white;
  ${border}
  ${rotation}

  .loading-container {
    height: 30vh;
  }
`;
