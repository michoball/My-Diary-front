import styled from "styled-components";
import { calendarCss } from "../../../utill/calendar/Calendar.styles";

export const SidebarCalendarContainer = styled.div`
  position: relative;
  height: 100%;

  ${calendarCss} {
    .fc-theme-standard .fc-scrollgrid {
      border: none;
    }
    font-size: 10px;

    td,
    th {
      border: none;
    }
    .fc-toolbar-title {
      font-size: 18px;
      margin-right: 15px;
    }

    .fc-header-toolbar.fc-toolbar {
      margin-bottom: 5px;
      .fc-toolbar-chunk {
        display: flex !important;
      }
    }

    .fc-button-primary:not(:disabled),
    .fc-button-primary:disabled {
      margin: 0;
      width: 50px;
      font-size: 10px;
      border: none;
    }

    .fc-prev-button,
    .fc-next-button {
      height: 30px;
      border: none;

      & span {
        color: #d2d2d2 !important;
        font-weight: bold;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .fc-daygrid-day {
      .fc-daygrid-day-top {
        justify-content: center;
      }
      .fc-daygrid-day-bottom {
        text-align: center;

        .fc-daygrid-more-link {
          font-size: 16px;
          color: orange;
        }
      }
      .fc-event-title {
        font-size: 8px;
      }

      .fc-daygrid-day-events {
        .fc-event-main .fc-event-title {
          padding: 0;
        }
      }
    }
  }
`;
