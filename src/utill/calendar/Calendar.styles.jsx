import styled, { css } from "styled-components";

export const calendarCss = css`
  .fc {
    background-color: white;

    .fc-button-primary {
      min-width: 65px;
      padding: 5px 10px;
      margin-right: 10px;
    }

    .fc-button-primary:not(:disabled) {
      /* border: none; */
      background-color: #f2a7a7;
      &.fc-button-active {
        background-color: #f23d4c;
      }
      :hover {
        border: 1px solid white;
        background-color: #f2727d;
      }
      :active {
        background-color: #f23d4c;
        transform: scale(0.95);
      }
    }

    .fc-button-primary:not(:disabled).fc-button-active,
    .fc-button-primary:not(:disabled).fc-button-active,
    .fc-button-primary:not(:disabled),
    .fc-button-primary:not(:disabled) {
      border: 1px solid white;
      :active,
      :focus {
        box-shadow: none !important;
        border: none;
      }
    }

    .fc-col-header {
      padding: 10px;
      background-color: white;
      .fc-col-header-cell {
        color: white !important;
      }
    }

    .fc-prev-button,
    .fc-next-button {
      margin: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 35px;
      background-color: transparent !important;

      span {
        color: #f23d4c;
        font-weight: bold;
        font-size: 40px;
      }
      &:hover {
        transform: scale(1.1);
        background-color: transparent !important;
      }
    }

    .fc-list-table .fc-list-day-cushion {
      background-color: rgb(0, 0, 0, 20%) !important;
    }
    .fc-daygrid-event {
      font-size: 12px;

      &.fc-daygrid-block-event {
        border: 1px solid black !important;
      }
    }
  }
`;

export const FullCalendarWarpper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;
