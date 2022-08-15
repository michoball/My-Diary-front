import styled from "styled-components";
import { calendarCss } from "../../../utill/calendar/Calendar.styles";
import { rotation, border } from "../../../global.styles";

export const CalendarWrapper = styled.div`
  width: 70%;

  padding: 10px;

  min-width: 980px;
  min-height: 600px;

  z-index: ${({ zvalue }) => zvalue};
`;

export const CalendarView = styled.div`
  position: relative;
  padding: 20px 10px;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;

  ${rotation}
  ${border}
`;

export const CalendarContainer = styled.div`
  position: relative;
  width: 100%;

  ${calendarCss} {
    th {
      border: 2px solid #ff3d3d;
      border-right: none;
    }
    .fc-theme-standard .fc-scrollgrid {
      border: 2px solid #ff3d3d;
      border-radius: 20px;
      overflow: hidden;
    }
    .fc-toolbar.fc-header-toolbar {
      display: flex;
      justify-content: space-around !important;
      margin-bottom: 10px;
      .fc-toolbar-chunk {
        display: flex;
        &:first-child {
          align-items: center;
          width: 40%;
          min-width: 400px;
          .fc-toolbar-title {
            margin: 0 10px;
            font-size: 25px;
          }
        }
        &:nth-child(2) {
          flex: 0.4;
          margin: 0 20px;
          gap: 10px;
        }
        &:last-child {
          min-width: 200px;
          height: 50px;
        }
      }
    }
  }

  table .fc-col-header .fc-col-header-cell {
    height: 50px;
    color: #ff3d3d;
    .fc-col-header-cell-cushion {
      color: #ff3d3d;
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
      cursor: pointer;
      :hover {
        background-color: rgba(187, 187, 187, 0.4);
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
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 5px;
  right: 0;

  z-index: 5;
`;
