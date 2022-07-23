import styled from "styled-components";

export const SideBarWrapper = styled.div`
  flex: 0.3;
  padding: 0 10px;
  width: 100%;
  min-width: 400px;
  max-width: 450px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const SideContentWapper = styled.div`
  padding: 10px 10px;
  width: 100%;
  border: 2px solid #bbb;
  border-radius: 10px;
  background-color: white;
  color: black;
  /* background-color: rgba(178, 178, 178, 0.5); */
  margin-bottom: 5px;

  :last-child {
    margin-top: 5px;
    margin-bottom: 0;
  }
`;

export const ListViewBox = styled.div`
  position: relative;
  height: calc(45vh - 75px);
`;

export const CalendarBox = styled.div`
  position: relative;

  height: calc(55vh - 75px);
  .fc-toolbar.fc-header-toolbar {
    margin-bottom: 10px;
  }
  .fc-toolbar-title {
    font-size: 20px;
  }
  .fc-prev-button,
  .fc-next-button {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 60px !important;
    height: 40px !important;
    background-color: transparent !important;
    font-size: 25px;
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
  .fc-daygrid-more-link {
    font-size: 20px;
    color: orange;
  }
  .fc-event {
    border: 1px solid black !important;
    font-size: 10px;
  }
`;
