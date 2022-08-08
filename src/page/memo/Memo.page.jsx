import { MemoContainer } from "./Memo.styles";

import MemoListView from "../../component/memoListView/MemoListView";
import { Route, Routes } from "react-router-dom";
import MemoView from "../../component/memoView/MemoVew";

function Memo() {
  return (
    <MemoContainer>
      <Routes>
        <Route index element={<MemoListView />} />
        <Route path=":memoId" element={<MemoView />} />
      </Routes>
    </MemoContainer>
  );
}

export default Memo;
