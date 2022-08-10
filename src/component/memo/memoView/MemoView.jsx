import React, { memo, useEffect, useState } from "react";
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
  const [searchWord, setSearchWord] = useState("");
  const [memoCards, setMemoCards] = useState(memoLists);

  const serachHandler = (e) => {
    setSearchWord(e.target.value);
  };
  useEffect(() => {
    const searchTerm = setTimeout(() => {
      console.log("go");
      setMemoCards(memoLists.filter((memo) => memo.title.includes(searchWord)));
    }, 1000);

    return () => {
      clearTimeout(searchTerm);
    };
  }, [searchWord, memoLists]);

  return (
    <>
      <SideBarViewContainer>
        <MemoViewSidebar
          setMemoCards={setMemoCards}
          searchWord={searchWord}
          onSearch={serachHandler}
        />
      </SideBarViewContainer>
      <MainViewContainer>
        <MemoListViewContainer>
          <MemoViewHeader>
            <h1>Memo Lists</h1>
          </MemoViewHeader>
          <MemosWrapper>
            <MemosContainer>
              {memoCards.map((memoList) => {
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
