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
import { useDispatch } from "react-redux";
import { memoActions } from "../../../features/memo/memoSlice";
import { useNavigate } from "react-router-dom";

function MemoEditSidebar({ onPreview, memoInfo, setMemoInfo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const saveMemoHandler = () => {
    try {
      dispatch(
        memoActions.addMemo({
          ...memoInfo,
          date: new Date().toISOString(),
        })
      );
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
        dispatch(memoActions.removeMemo(memoInfo.id));
        navigate("/memo");
      }
    } catch (error) {
      alert("error ocuured from RemoveMemo redux ", error);
    }
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
            <label>
              <Palette />
              Color
            </label>
            <ColorPicker
              colorSelected={memoInfo.color}
              onColorPick={colorChangeHandler}
            />
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
