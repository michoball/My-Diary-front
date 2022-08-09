import React from "react";
import EditorForm from "../../component/memo/memoEditor/EditorForm";
import {
  MainEditorViewContainer,
  MemoEditorContainer,
  SideBarViewContainer,
  SideBarWrapper,
  SideContentWapper,
} from "./Editor.page.styles";

import { Route, Routes } from "react-router-dom";
function Editor() {
  return (
    <MemoEditorContainer>
      <SideBarViewContainer>
        <SideBarWrapper>
          <SideContentWapper></SideContentWapper>
        </SideBarWrapper>
      </SideBarViewContainer>
      <MainEditorViewContainer>
        <Routes>
          <Route index element={<EditorForm />} />
          <Route path="/:editmemoId" element={<EditorForm />} />
        </Routes>
      </MainEditorViewContainer>
    </MemoEditorContainer>
  );
}

export default Editor;
