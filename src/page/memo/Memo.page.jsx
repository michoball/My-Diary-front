import { useEffect } from "react";
import EditorForm from "../editor/EditorForm";
import { MemoContainer } from "./Memo.styles";
import { useSelector } from "react-redux";
import { selectMemoLists } from "../../features/memo/memo.select";

function Memo() {
  const memoLists = useSelector(selectMemoLists);

  return (
    <MemoContainer>
      <EditorForm memoData={memoLists[0]} />
    </MemoContainer>
  );
}

export default Memo;
