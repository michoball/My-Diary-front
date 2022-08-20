import React, { useEffect, useState } from "react";
import {
  MemoListViewContainer,
  MainViewContainer,
  SideBarViewContainer,
  MemosContainer,
  MemosWrapper,
  MemoViewHeader,
} from "./MemoView.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMemoLoading,
  selectRecentOrderMemoLists,
} from "../../../features/memo/memo.select";
import MemoCard from "../memoCard/MemoCard";
import MemoViewSidebar from "../MemoViewSidebar/MemoViewSidebar";
import Loading from "../../../UI/loading/Loading";

import { getMemos } from "../../../features/memo/memo.thunk";

function MemoView() {
  const dispatch = useDispatch();
  const orderedMemoLists = useSelector(selectRecentOrderMemoLists);
  const memoIsLoading = useSelector(selectMemoLoading);
  const [searchWord, setSearchWord] = useState("");
  const [memoCards, setMemoCards] = useState(orderedMemoLists);

  useEffect(() => {
    dispatch(getMemos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const serachHandler = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const searchTerm = setTimeout(() => {
      setMemoCards(
        orderedMemoLists.filter((memo) => memo.title.includes(searchWord))
      );
    }, 500);

    return () => {
      clearTimeout(searchTerm);
    };
  }, [searchWord, orderedMemoLists]);

  const selectColorHandler = (color) => {
    setMemoCards(orderedMemoLists.filter((memo) => memo.color === color));
  };

  const memoViewResetHandler = () => {
    setMemoCards(orderedMemoLists);
  };
  return (
    <>
      <SideBarViewContainer>
        <MemoViewSidebar
          onMemoView={memoViewResetHandler}
          searchWord={searchWord}
          onSearch={serachHandler}
          onSelectColor={selectColorHandler}
        />
      </SideBarViewContainer>
      <MainViewContainer>
        <MemoListViewContainer>
          <MemoViewHeader>
            <h1>Memo Lists</h1>
          </MemoViewHeader>
          <MemosContainer>
            {memoIsLoading ? (
              <Loading />
            ) : (
              <MemosWrapper>
                {memoCards.map((memoList) => {
                  return <MemoCard key={memoList._id} memoInfo={memoList} />;
                })}
              </MemosWrapper>
            )}
          </MemosContainer>
        </MemoListViewContainer>
      </MainViewContainer>
    </>
  );
}

export default MemoView;
