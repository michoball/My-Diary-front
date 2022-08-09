import styled from "styled-components";
import { Link } from "react-router-dom";

export const MemoEditorContainer = styled.div`
  display: flex;
  background-color: #d2d2d2;
  padding: 10px 20px;
`;

export const MainEditorViewContainer = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  padding: 10px;

  height: calc(100vh - 80px);
`;

export const SideBarViewContainer = styled.div`
  padding: 10px 10px 10px 0;

  height: calc(100vh - 80px);
`;

export const SideBarWrapper = styled.div`
  width: 300px;
  height: 100%;
`;

export const SideContentWapper = styled.div`
  width: 100%;
  height: 100%;

  color: black;

  padding: 10px;
  border: 2px solid rgb(242, 167, 167);
  border-radius: 10px;
  background-color: white;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;

  border-radius: 10px;

  transition: all 0.2s ease-in;
  cursor: pointer;
  &.back {
    background-color: #9c27b0;
    color: white;

    :hover {
      background-color: #9c27b0;
      transform: scale(0.98);
    }
  }
  :hover {
    background-color: rgba(210, 210, 210, 0.5);
  }
  svg {
    margin-right: 10px;
  }
`;
