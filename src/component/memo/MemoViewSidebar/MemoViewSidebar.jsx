import {
  SideBarWrapper,
  SideContentWapper,
  SearchBarContainer,
  NavLink,
  MajorMemoContainer,
  SearchButton,
  MemoContainer,
} from "./MemoViewSidebar.styles";
import FormInput from "../../../UI/formInput/FormInput";

import { useEffect, useState } from "react";
import { PlusCircle, Search, Star } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";
import { selectMajorMemos } from "../../../features/memo/memo.select";
import MajorMemo from "../MajorMemoCard/MajorMemoCard";

function MemoViewSidar({ onSearch, searchWord }) {
  const majorMemo = useSelector(selectMajorMemos);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(memoActions.clearSelectMemo());
  }, [dispatch]);

  return (
    <SideBarWrapper>
      <SearchBarContainer>
        <FormInput
          label="검색"
          value={searchWord}
          onChange={(e) => onSearch(e)}
        />
        <SearchButton>
          <Search />
        </SearchButton>
      </SearchBarContainer>
      <SideContentWapper>
        <NavLink to="/memo/editor">
          <PlusCircle />
          New Memo
        </NavLink>
        {/* color Section 따로 만들어서 color 클릭시 해당 색깔 메모만 보이게 하기 */}
        {/*  주요 메모 모아보는 기능으로 하면 좋을듯 */}
        <MajorMemoContainer>
          <span>
            <Star />
            주요 메모
          </span>
          <MemoContainer>
            {majorMemo.map((memo) => {
              return <MajorMemo key={memo.id} memo={memo} />;
            })}
          </MemoContainer>
        </MajorMemoContainer>
      </SideContentWapper>
    </SideBarWrapper>
  );
}

export default MemoViewSidar;
