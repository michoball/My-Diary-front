import {
  SideBarWrapper,
  SideContentWapper,
  SearchBarContainer,
  NavLink,
  SearchButton,
} from "./MemoSidebar.styles";
import FormInput from "../../../UI/formInput/FormInput";

import { useEffect, useState } from "react";
import { PlusCircle, Search } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";

function MemoSidar() {
  const [searchWord, setSearchWord] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(memoActions.clearSelectMemo());
  }, [dispatch]);

  const serachHandler = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <SideBarWrapper>
      <SearchBarContainer>
        <FormInput label="검색" value={searchWord} onChange={serachHandler} />
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              display: "block",
              width: "20px",
              height: "20px",
              backgroundColor: "olive",
              borderRadius: "50%",
            }}
          ></div>
          <span>주요 메모</span>
          <span>갯수: 6</span>
        </div>
      </SideContentWapper>
    </SideBarWrapper>
  );
}

export default MemoSidar;
