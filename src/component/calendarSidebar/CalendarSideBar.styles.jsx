import styled from "styled-components";
import { rotation, border } from "../../global.styles";

export const SideBarWrapper = styled.div`
  padding: 10px 10px 10px 0;
  width: 30%;

  min-height: 600px;
  min-width: 400px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const SideContentWapper = styled.div`
  padding: 5px 5px;
  width: 100%;
  ${rotation}
  ${border}
  background-color: white;
  color: black;
`;

export const ListViewBox = styled(SideContentWapper)`
  height: 45%;
  margin-top: 5px;
`;

export const CalendarBox = styled(SideContentWapper)`
  height: 55%;
  margin-bottom: 5px;
`;
