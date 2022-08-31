import styled from "styled-components";
import { calendarCss } from "../../../../utill/calendar/Calendar.styles";
import { border } from "../../../../global.styles";

export const CalendarWrapper = styled.div`
  width: 70%;

  padding-bottom: 20px;

  min-width: 900px;
  min-height: 400px;

  z-index: ${({ zvalue }) => zvalue};
  @media screen and (max-width: 1023px) {
    width: 100%;
    height: 600px;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 50px;
    width: 100%;
    height: 500px;
    min-width: 600px;
  }
`;

export const CalendarView = styled.div`
  position: relative;
  padding: 20px;
  display: flex;

  width: 100%;
  height: 100%;
  background-color: white;

  ${border}
`;

export const CalendarContainer = styled.div`
  position: relative;
  width: 100%;

  ${calendarCss} {
    th {
      border-color: #6239337f;
      border-radius: 10px;
      border-bottom-right-radius: unset;
      border-bottom-left-radius: unset;
      overflow: hidden;
    }
    td {
      border-radius: 10px;
      border-color: #6239337f;
      border-top-right-radius: unset;
    }
    .fc-theme-standard .fc-scrollgrid {
      border-radius: 10px;
      border-color: #6239337f;
    }
    .fc-toolbar.fc-header-toolbar {
      position: relative;
      margin-bottom: 10px;
      .fc-toolbar-chunk {
        display: flex;

        &:first-child {
          position: absolute;
          top: 0;
          left: 0;
          align-items: center;
          width: 40%;
          min-width: 400px;
          .fc-toolbar-title {
            margin: 0 10px;
            font-size: 25px;
            color: #f2727d;
          }
        }
        &:nth-child(2) {
          position: absolute;
          top: 0;
          left: 40%;
          margin: 0 20px;
          gap: 10px;
        }
        &:last-child {
          min-width: 200px;
          height: 50px;
        }
        @media screen and (max-width: 767px) {
          &:first-child {
            position: absolute;
            top: 0;
            left: 0;
            align-items: center;
            width: 60%;
            min-width: 200px;
            .fc-toolbar-title {
              font-size: 20px;
            }
          }
          &:nth-child(2) {
            top: 0;
            left: unset;
            right: 0;
            margin: 0;
            gap: 10px;
          }
          &:last-child {
            min-width: 200px;
            height: 40px;
          }
        }
      }
    }
  }

  table .fc-col-header .fc-col-header-cell {
    padding: 10px 0;
    height: 30px;
    @media screen and (max-width: 767px) {
      padding: 5px 0;
      height: 20px;
    }
    .fc-col-header-cell-cushion {
      color: #623933;
    }
    &.fc-day.fc-day-sun {
      .fc-col-header-cell-cushion {
        color: #f23d4c;
      }
    }
  }
  .fc-daygrid {
    .fc-col-header {
      .fc-col-header-cell {
        .fc-col-header-cell-cushion {
          font-size: 20px;
        }
      }
    }
  }

  .fc-daygrid-day {
    &.fc-day {
      :hover {
        background-color: #d1d1d1;
      }
    }
    .fc-daygrid-day-bottom {
      text-align: center;

      .fc-daygrid-more-link {
        font-size: 24px;
        color: orange;
      }
    }
  }

  .fc-timegrid {
    table .fc-col-header {
      .fc-col-header-cell {
        align-items: center;
        .fc-col-header-cell-cushion {
          font-size: 20px;
        }
      }
    }

    .fc-timegrid-event .fc-event-main {
      text-align: center;
      padding-top: 10px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;

  z-index: 5;
  @media screen and (max-width: 767px) {
    top: -80px;
    right: 0;
  }
`;
