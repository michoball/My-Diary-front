import {
  SideBarWrapper,
  SideContentWapper,
  SearchBarContainer,
  NavLink,
  SearchButton,
} from "./MemoSidebar.styles";
import FormInput from "../../UI/formInput/FormInput";

import { useState } from "react";
import { PlusCircle, Search } from "react-bootstrap-icons";

function MemoSidar() {
  const [searchWord, setSearchWord] = useState("");

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
