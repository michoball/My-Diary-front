import styled from "styled-components";

export const MemoListViewContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 20px 20px 20px;

  width: 100%;
  height: 100%;

  background-color: white;
  border: 3px solid #f2a7a7;
  border-radius: 20px;
`;

export const MainViewContainer = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  padding: 10px;

  height: calc(100vh - 80px);
`;

export const SideBarViewContainer = styled.div`
  padding: 10px 10px 10px 0;
  width: 100%;
  height: calc(100vh - 80px);
  min-width: 250px;
  max-width: 300px;
`;

export const MemoViewHeader = styled.header`
  padding: 10px;
  font-weight: bold;
  border-bottom: 2px solid #bbb;
  margin-bottom: 10px;
`;

export const MemosContainer = styled.div`
  width: 100%;
  padding: 10px;

  overflow-x: hidden;
  overflow-y: scroll;

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
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 10px;
`;
