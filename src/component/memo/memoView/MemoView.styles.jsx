import styled from "styled-components";
import { border } from "../../../global.styles";

export const MemoListViewContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;

  width: 100%;
  height: 100%;

  background-color: white;
  ${border}
`;

export const MainViewContainer = styled.div`
  width: 100%;
  min-width: 800px;

  padding: 10px;
`;

export const SideBarViewContainer = styled.div`
  padding: 10px 10px 10px 0;
  width: 100%;

  min-width: 250px;
  max-width: 400px;
`;

export const MemoViewHeader = styled.header`
  padding: 10px;
  font-weight: bold;
  color: #f2727d;
`;

export const MemosContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  overflow: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f2a7a7;
    border-radius: 5px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  ::-webkit-scrollbar-track {
  }
`;

export const MemosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 10px;
`;
