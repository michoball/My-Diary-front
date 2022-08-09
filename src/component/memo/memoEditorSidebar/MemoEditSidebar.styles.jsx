import styled from "styled-components";
import { Link } from "react-router-dom";

export const SideBarViewContainer = styled.div`
  padding: 10px 10px 10px 0;
  height: calc(100vh - 80px);
`;

export const SideBarWrapper = styled.div`
  width: 300px;
  height: 100%;
  padding: 10px 20px;
  border: 2px solid rgb(242, 167, 167);
  border-radius: 10px;
  background-color: white;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #9c27b0;
  color: white;

  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: #9c27b0;
    transform: scale(0.98);
  }
  svg {
    margin-right: 10px;
    transform: translateX(-10px);
  }
`;

export const SideBtnWapper = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 2px solid #bbb;

  padding-top: 10px;
  svg {
    margin-right: 10px;
  }
`;

export const SideBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 20px;
  padding: 10px;
  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
  transition: all 0.2s ease-in;
  cursor: pointer;
  background-color: transparent;

  :hover {
    background-color: rgba(210, 210, 210, 0.5);
  }
`;
