import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { Link } from "react-router-dom";

export const SideBarWrapper = styled.div`
  height: 100%;
`;

export const SideContentWapper = styled.div`
  height: calc(100% - 60px);

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
  border: 2px solid rgb(242, 167, 167);
  border-radius: 10px;
  background-color: white;

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
    align-items: center;
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

  height: 40vh;

  border: 2px solid #2b2b2b;
  border-radius: 10px;
  padding: 10px;

  background-color: #d2d2d2;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
