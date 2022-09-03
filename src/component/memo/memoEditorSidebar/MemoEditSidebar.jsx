import ColorPicker from "../../colorPicker/ColorPicker";

import {
  SideBarViewContainer,
  SideBarWrapper,
  SideBtnWapper,
  NavLink,
  SideBtn,
  ColorSection,
} from "./MemoEditSidebar.styles";
import {
  ArrowLeft,
  Save2,
  Easel3,
  Palette,
  Trash3,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteMemo } from "../../../features/memo/memo.thunk";
import { addMemo } from "../../../features/memo/memo.action";
import { useNavigate } from "react-router-dom";
import { selectMemoLists } from "../../../features/memo/memo.select";
import { useState } from "react";

function MemoEditSidebar({ onPreview, memoInfo, setMemoInfo }) {
  const memoLists = useSelector(selectMemoLists);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hideColor, setHideColor] = useState(false);
  const saveMemoHandler = () => {
    try {
      dispatch(addMemo(memoLists, memoInfo));
      alert("메모가 저장되었습니다!");
      navigate("/memo");
    } catch (error) {
      alert("error ocuured from addMemo redux ", error);
    }
  };

  const colorChangeHandler = (pickColor) => {
    setMemoInfo((prev) => {
      return { ...prev, color: pickColor };
    });
  };
  const removeMemoHandler = () => {
    try {
      if (window.confirm("메모를 지우시겠습니까?")) {
        dispatch(deleteMemo(memoInfo._id));
        navigate("/memo");
      }
    } catch (error) {
      alert("error ocuured from RemoveMemo redux ", error);
    }
  };
  const toggleColor = (e) => {
    setHideColor(!hideColor);
  };
  return (
    <SideBarViewContainer>
      <SideBarWrapper>
        <NavLink to="/memo">
          <ArrowLeft /> Back
        </NavLink>
        <SideBtnWapper>
          <SideBtn onClick={saveMemoHandler}>
            <Save2 /> Save
          </SideBtn>
          <SideBtn onClick={() => onPreview()}>
            <Easel3 /> Preview
          </SideBtn>
          <ColorSection>
            <label onClick={toggleColor}>
              <Palette />
              Color
            </label>
            <div className={hideColor ? "hide" : ""}>
              <ColorPicker
                colorSelected={memoInfo.color}
                onColorPick={colorChangeHandler}
              />
            </div>
          </ColorSection>
          <SideBtn className="delete" onClick={removeMemoHandler}>
            <Trash3 /> Delete
          </SideBtn>
        </SideBtnWapper>
      </SideBarWrapper>
    </SideBarViewContainer>
  );
}

export default MemoEditSidebar;
