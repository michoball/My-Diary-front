import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { Link } from "react-router-dom";

export const SignInHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #d2d2d2;

  height: 20%;

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

  padding: 20px 0;
  gap: 15px;
  height: 80%;
  min-height: 180px;

  overflow-y: scroll;
  ${FormInputContainer} {
    margin-bottom: 5px;
    height: 40px;
    font-size: 16px;
    input {
      padding: 0 10px;
      width: 100%;
      height: 100%;
      border: 2px solid #ffc107;
      border-left: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      :focus {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
    label {
      color: white;
      height: 100%;

      background-color: #ffc107;
      padding: 5px 5px 5px 10px;
      width: 130px;
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
