import React from "react";

import {
  SideBarViewContainer,
  SideBarWrapper,
  SideBtnWapper,
  NavLink,
  SideBtn,
} from "./MemoEditSidebar.styles";
import { ArrowLeft, Save2, Easel3 } from "react-bootstrap-icons";

function MemoEditSidebar({ onSave, onPreview }) {
  return (
    <SideBarViewContainer>
      <SideBarWrapper>
        <NavLink to="/memo">
          <ArrowLeft /> Back
        </NavLink>
        <SideBtnWapper>
          <SideBtn onClick={() => onSave()}>
            <Save2 /> Save
          </SideBtn>
          <SideBtn onClick={() => onPreview()}>
            <Easel3 /> Preview
          </SideBtn>
        </SideBtnWapper>
      </SideBarWrapper>
    </SideBarViewContainer>
  );
}

export default MemoEditSidebar;
