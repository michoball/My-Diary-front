import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { Link } from "react-router-dom";
import {
  CircleColorPicker,
  ColorPalletContainer,
} from "../../colorPicker/ColorPicker.styles";
import { border } from "../../../global.styles";

export const SideBarWrapper = styled.div`
  height: 100%;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const SideContentWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100% - 80px);

  background-color: white;

  padding: 10px;
  ${border}
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 20px;
  padding: 20px;

  border-radius: 10px;

  transition: all 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: #f3e9e7;
  }
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: white;

  ${border}

  padding: 20px;
  margin-bottom: 20px;

  ${FormInputContainer} {
    width: 80%;
    align-items: center;

    margin-bottom: unset;
    margin: 5px 10px;

    input {
      padding: 5px 10px;
      width: 100%;
    }
    label {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    ${FormInputContainer} {
      width: 100%;
      align-items: center;

      margin-bottom: unset;
      margin: 5px 10px;

      input {
        padding: 5px 10px;
        width: 100%;
      }
      label {
        font-size: 18px;
      }
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

  transition: transform 0.2s ease-in;
  :hover {
    transform: scale(1.1);
  }
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

export const MajorMemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  height: 50%;

  label {
    display: flex;
    font-size: 20px;
  }
  svg {
    margin-right: 10px;
  }
  @media screen and (max-width: 767px) {
    label {
      font-size: 18px;
    }
  }
`;

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
  margin-top: 15px;

  height: 100%;

  border-radius: 10px;
  padding: 15px;

  background-color: #f3e9e7;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;

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
    background-color: #f3e9e7;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    label {
      font-size: 18px;
    }
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
  color: #623933;
  font-size: 20px;

  padding: 20px;
  margin-bottom: 10px;

  border-radius: 10px;
  border: none;
  transition: all 0.2s ease-in;

  cursor: pointer;
  background-color: transparent;

  :hover {
    background-color: #f3e9e7;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;
