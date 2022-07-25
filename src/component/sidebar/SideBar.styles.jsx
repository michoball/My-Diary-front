import styled from "styled-components";

export const SideBarWrapper = styled.div`
  padding: 10px 10px 10px 0;
  width: 100%;
  height: calc(100vh - 80px);
  min-width: 350px;
  max-width: 400px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  height: 100%;
`;

export const SideContentWapper = styled.div`
  padding: 5px 5px;
  width: 100%;
  border: 2px solid #bbb;
  border-radius: 10px;
  background-color: white;
  color: black;
`;

export const ListViewBox = styled(SideContentWapper)`
  height: calc(45vh - 55px);
  margin-top: 5px;
`;

export const CalendarBox = styled(SideContentWapper)`
  height: calc(55vh - 55px);
  margin-bottom: 5px;
`;
