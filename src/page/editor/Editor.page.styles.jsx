import styled from "styled-components";

export const EditorContainer = styled.div`
  display: flex;
  background-color: #d2d2d2;
  padding: 10px 20px;
`;

export const MainEditorViewContainer = styled.div`
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
