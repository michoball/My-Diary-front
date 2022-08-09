import React from "react";
import {
  MemoListViewContainer,
  MainViewContainer,
  SideBarViewContainer,
  MemosContainer,
  MemosWrapper,
  MemoViewHeader,
} from "./MemoView.styles";
import { useSelector } from "react-redux";
import { selectMemoLists } from "../../../features/memo/memo.select";
import MemoCard from "../memoCard/MemoCard";
import MemoViewSidebar from "../MemoViewSidebar/MemoViewSidebar";

function MemoView() {
  const memoLists = useSelector(selectMemoLists);

  return (
    <>
      <SideBarViewContainer>
        <MemoViewSidebar />
      </SideBarViewContainer>
      <MainViewContainer>
        <MemoListViewContainer>
          <MemoViewHeader>Memo Lists</MemoViewHeader>
          <MemosWrapper>
            <MemosContainer>
              {memoLists.map((memoList) => {
                return <MemoCard key={memoList.id} memoInfo={memoList} />;
              })}
            </MemosContainer>
          </MemosWrapper>
        </MemoListViewContainer>
      </MainViewContainer>
    </>
  );
}

export default MemoView;
