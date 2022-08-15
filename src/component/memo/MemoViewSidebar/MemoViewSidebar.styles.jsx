import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { Link } from "react-router-dom";
import {
  CircleColorPicker,
  ColorPalletContainer,
} from "../../colorPicker/ColorPicker.styles";
import { rotation, border } from "../../../global.styles";

export const SideBarWrapper = styled.div`
  height: 100%;
`;

export const SideContentWapper = styled.div`
  height: calc(100% - 60px);

  color: black;
  background-color: white;

  padding: 10px;
  ${border}
  ${rotation}
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 20px;
  padding: 10px;

  border-radius: 10px;

  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: rgba(210, 210, 210, 0.5);
  }
  svg {
    margin-right: 10px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: white;

  ${border}
  ${rotation}

  padding: 5px;
  margin-bottom: 10px;

  ${FormInputContainer} {
    align-items: center;

    margin-bottom: unset;
    margin: 5px 10px;

    input {
      padding: 0 10px;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;

  padding: 5px;
  border-radius: 10%;
  border: none;
  background-color: transparent;

  transition: all 0.2s ease-in;
  :hover {
    background-color: rgba(210, 210, 210, 0.5);
  }
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

export const MajorMemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  span {
    display: flex;
    font-size: 20px;
  }
  svg {
    margin-right: 10px;
  }
`;

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  margin-top: 10px;

  height: 30vh;

  border: 2px solid #2b2b2b;
  border-radius: 10px;
  padding: 10px;

  background-color: #d2d2d2;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  margin-bottom: 10px;

  label {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  svg {
    margin-right: 10px;
  }
  ${ColorPalletContainer} {
    width: 90%;
    height: 100%;
    transform: translateX(10px);
  }
  ${CircleColorPicker} {
    border: 2px solid black;
  }
`;

export const SideBtnWapper = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    margin-right: 10px;
  }
`;

export const SideBtn = styled.button`
  display: flex;
  justify-content: flex-start;

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
