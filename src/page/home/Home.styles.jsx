import styled, { css } from "styled-components";
import { calendarCss } from "../../utill/calendar/Calendar.styles";
import { MemoCardContainer } from "../../component/memo/memoCard/MemoCard.styles";
import { Link } from "react-router-dom";

const rotation = css`
  transform: rotate3d(-1, 1, 0, 10deg);
  box-shadow: -10px -8px 10px rgba(0, 0, 0, 0.5);
`;
const border = css`
  border: 3px solid #f2a7a7;
  border-radius: 10px;
`;

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
    min-height: 500px;
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
  padding: 20px 0;
  color: #f2727d;
  text-transform: uppercase;
  border-bottom: 3px solid #bbb;

  svg {
    width: 450px;
    fill: #f2727d;
    ${rotation}
  }
`;

export const HomeCalendar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(90vh - 120px);
  width: 800px;
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

  ${calendarCss}
`;

export const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 650px;
  min-width: 400px;
  height: calc(90vh - 120px);
`;

export const MemosContianer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  ${border}

  padding: 10px 20px;
  height: 52%;
  width: 100%;
  ${rotation}

  h2 {
    margin-bottom: 10px;
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
  }

  header {
    font-size: 14px;
    width: 200px;
  }
`;

export const NavNLoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 45%;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 30%;
  padding: 10px;

  background-color: white;
  ${border}
  ${rotation}
  h2 {
    padding: 0 0 10px 10px;
    border-bottom: 2px solid #d2d2d2;
    margin-bottom: 10px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: rgba(210, 210, 210, 0.5);
  }

  svg {
    margin-right: 10px;
  }
`;

export const LoginContainer = styled.div`
  width: 65%;
  height: 100%;
  padding: 10px 20px;

  background-color: white;
  ${border}
  ${rotation}
`;
