import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CircleColorPicker,
  ColorPalletContainer,
} from "../../colorPicker/ColorPicker.styles";
import { border } from "../../../global.styles";

export const SideBarViewContainer = styled.div`
  width: 100%;

  min-width: 250px;
  max-width: 400px;
  padding: 10px 10px 20px 0;
  height: calc(100vh - 100px);
`;

export const SideBarWrapper = styled.div`
  width: 100%;

  height: 100%;
  padding: 20px;
  background-color: white;

  ${border}
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #9c27b0b2;
  color: white;

  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  transition: background-color 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: #9c27b0;
  }
  svg {
    margin-right: 10px;
    transform: translateX(-10px);
  }
`;

export const SideBtnWapper = styled.div`
  display: flex;
  flex-direction: column;

  border-top: 2px solid #f3e9e7;

  padding-top: 20px;
  svg {
    margin-right: 10px;
  }
`;

export const SideBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  color: #623933;
  font-size: 20px;
  padding: 20px;

  border-radius: 10px;
  border: none;

  transition: all 0.2s ease-in;
  cursor: pointer;
  background-color: transparent;

  :hover {
    background-color: #f3e9e7;
  }
  &.delete {
    :hover {
      background-color: rgba(244, 67, 54, 0.5);
    }
  }
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin: 20px 0;

  label {
    font-size: 20px;
    display: flex;
  }
  svg {
    margin-right: 10px;
  }
  ${ColorPalletContainer} {
    margin-left: 5%;
    width: 70%;
    transform: translateX(10px);
  }
  ${CircleColorPicker} {
    border: 2px solid black;
  }
`;
