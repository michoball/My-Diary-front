import React from "react";
import EditorForm from "../../component/memoEditor/EditorForm";
import { EditorContainer, MainEditorViewContainer } from "./Editor.page.styles";
import { useSelector } from "react-redux";
import { selectMemoLists } from "../../features/memo/memo.select";
function Editor() {
  const memoLists = useSelector(selectMemoLists);
  console.log(memoLists);

  return (
    <EditorContainer>
      <MainEditorViewContainer>
        <EditorForm memoData={memoLists[0]} />
      </MainEditorViewContainer>
    </EditorContainer>
  );
}

export default Editor;
