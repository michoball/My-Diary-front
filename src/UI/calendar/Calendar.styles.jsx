import styled, { css } from "styled-components";

export const calendarCss = css`
  .fc {
    /* td, th {
  border: 0 none;
} */

    .fc-button-primary:not(:disabled) {
      border: 1px solid white;
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
      :active,
      :focus {
        box-shadow: none !important;
        border: none;
      }
    }

    .fc-col-header-cell {
      color: white !important;
    }
    .fc-col-header {
      padding: 20px;
      background-color: #ff3d3d;
    }

    .fc-prev-button,
    .fc-next-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 70px !important;
      height: 40px !important;
      margin: 1px !important;
      background-color: #f23d4c !important;

      &:hover {
        background-color: #f2727d !important;
      }
      span {
        color: white;
        font-weight: bold;
      }
    }

    .fc-list-table .fc-list-day-cushion {
      background-color: rgb(0, 0, 0, 20%) !important;
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
