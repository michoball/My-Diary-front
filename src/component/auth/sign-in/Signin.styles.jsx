import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { Link } from "react-router-dom";

export const SignInHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #d2d2d2;
  margin-bottom: 20px;

  h2 {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const NavLink = styled(Link)`
  margin-right: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #ff3d3d;
  transform: translateY(10px);
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 150px;
    height: 30px;
    border: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .google {
    background-color: #9c27b0;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 10px;
  height: 60%;

  overflow-y: scroll;
  ${FormInputContainer} {
    padding: 0 20px;
    margin-bottom: 5px;

    input {
      width: 100%;
      border: 2px solid #ffc107;
      border-left: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    label {
      font-size: 14px;
      color: white;

      background-color: #ffc107;
      padding: 5px 10px;
      width: 100px;
      margin-right: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &.password {
      input {
        border: 2px solid #607d8b;
      }
      label {
        background-color: #607d8b;
      }
    }
  }
`;
