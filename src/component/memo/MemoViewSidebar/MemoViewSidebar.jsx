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
  MenuContent,
} from "./MemoViewSidebar.styles";
import FormInput from "../../../UI/formInput/FormInput";

import { useEffect, useRef } from "react";
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
  const colorRef = useRef();

  useEffect(() => {
    dispatch(clearSelectMemo());
  }, [dispatch]);

  const toggleColor = (e) => {
    const colorSection = e.target.nextElementSibling;
    let displayValue = colorSection.style.display;
    colorSection.style.display = displayValue === "none" ? "flex" : "none";
  };

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
        <SideBtnWapper>
          <NavLink to="/memo/editor">
            <PlusCircle />
            New Memo
          </NavLink>

          <SideBtn onClick={() => onMemoView()}>
            <Collection />
            전체 메모
          </SideBtn>
          <ColorSection>
            <label onClick={toggleColor}>
              <Palette />
              Color Filter
            </label>
            <div ref={colorRef}>
              <ColorPicker
                onColorPick={(color) => onSelectColor(color)}
                newColorTable={memoColorList && memoColorList}
                disable={memoColorList ? false : true}
              />
            </div>
          </ColorSection>
        </SideBtnWapper>

        <MajorMemoContainer>
          <label>
            <Star />
            주요 메모
          </label>
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
