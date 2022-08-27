import {
  SideBarWrapper,
  SideContentWapper,
  SearchBarContainer,
  NavLink,
  MajorMemoContainer,
  SearchButton,
  MemoContainer,
  ColorSection,
  SideBtnWapper,
  SideBtn,
} from "./MemoViewSidebar.styles";
import FormInput from "../../../UI/formInput/FormInput";

import { useEffect } from "react";
import {
  PlusCircle,
  Search,
  Star,
  Palette,
  Collection,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectMemo } from "../../../features/memo/memoSlice";

import {
  selectColorValue,
  selectMajorMemos,
} from "../../../features/memo/memo.select";
import MajorMemo from "../MajorMemoCard/MajorMemoCard";
import ColorPicker from "../../colorPicker/ColorPicker";

function MemoViewSidar({ onSearch, searchWord, onSelectColor, onMemoView }) {
  const majorMemo = useSelector(selectMajorMemos);
  const memoColorList = useSelector(selectColorValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSelectMemo());
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
        <SideBtnWapper>
          <SideBtn onClick={() => onMemoView()}>
            <Collection />
            전체 메모
          </SideBtn>
        </SideBtnWapper>
        <ColorSection>
          <label>
            <Palette />
            Color Filter
          </label>
          <ColorPicker
            onColorPick={(color) => onSelectColor(color)}
            newColorTable={memoColorList && memoColorList}
            disable={memoColorList ? false : true}
          />
        </ColorSection>

        <MajorMemoContainer>
          <span>
            <Star />
            주요 메모
          </span>
          <MemoContainer>
            {majorMemo.map((memo) => {
              return <MajorMemo key={memo._id} memo={memo} />;
            })}
          </MemoContainer>
        </MajorMemoContainer>
      </SideContentWapper>
    </SideBarWrapper>
  );
}

export default MemoViewSidar;
