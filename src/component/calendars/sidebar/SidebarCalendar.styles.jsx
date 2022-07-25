import styled from "styled-components";

export const SidebarCalendarContainer = styled.div`
  position: relative;
  height: 100%;
  .fc-theme-standard .fc-scrollgrid {
    border: none;
  }
  .fc {
    font-size: 12px;

    td,
    th {
      border: none;
    }

    .fc-toolbar.fc-header-toolbar {
      margin-bottom: 5px;
    }

    .fc-toolbar-title {
      font-size: 18px;
    }
    .fc-prev-button,
    .fc-next-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 50px !important;
      height: 30px !important;
      background-color: transparent !important;
      font-size: 20px;
      border: none;

      & span {
        color: #d2d2d2;
        font-weight: bold;
        &:hover {
          transform: scale(1.2);
        }
      }

      :active,
      :focus {
        box-shadow: none !important;
        border: none;
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
      .fc-daygrid-day-events {
        .fc-event-main .fc-event-title {
          padding: 0;
        }
      }
    }

    .fc-event {
      border: 1px solid black !important;
    }
  }
`;
