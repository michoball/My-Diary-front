import styled from "styled-components";
import { calendarCss } from "../../../utill/calendar/Calendar.styles";

export const CalendarWrapper = styled.div`
  width: 1000px;
  padding: 10px;
  min-width: 800px;
  max-width: 1200px;
  height: calc(100vh - 80px);
`;

export const CalendarView = styled.div`
  position: relative;
  padding: 20px 10px;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: white;
  border: 2px solid #bbb;
  border-radius: 20px;
`;

export const CalendarContainer = styled.div`
  position: relative;
  width: 100%;

  ${calendarCss} {
    th {
      border: 1px solid #ff3d3d;
      border-right: none;
    }
    .fc-theme-standard .fc-scrollgrid {
      border: 2px solid #ff3d3d;
      border-radius: 20px;
      overflow: hidden;
    }
    .fc-toolbar.fc-header-toolbar {
      display: flex;
      justify-content: flex-start !important;
      margin-bottom: 1em;
      .fc-toolbar-chunk {
        display: flex;
        &:first-child {
          flex: 0.4;
          min-width: 400px;
          .fc-toolbar-title {
            margin: 0 10px;
            font-size: 25px;
          }
        }
        &:nth-child(2) {
          flex: 0.3;
          margin: 0 10px;
        }
        &:last-child {
          display: none;
        }
      }
    }
  }

  .fc {
    table .fc-col-header .fc-col-header-cell {
      height: 50px;
      color: #ff3d3d;
      .fc-col-header-cell-cushion {
        color: #ff3d3d;
      }
    }
    .fc-daygrid {
      table .fc-col-header {
        .fc-col-header-cell {
          .fc-col-header-cell-cushion {
            font-size: 20px;
          }
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
  }
`;
