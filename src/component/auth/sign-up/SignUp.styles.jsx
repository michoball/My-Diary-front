import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { border } from "../../../global.styles";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
  min-width: 700px;
  height: 100%;

  background-color: white;
  ${border}

  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h1 {
    padding: 10px 0 0 0;
    font-size: 50px;
    display: flex;
    align-items: center;

    color: #f2727d;
  }
  svg {
    fill: #f2727d;
    width: 60px;
    height: 60px;
  }
  .Logo {
    width: 300px;
    fill: #f2727d;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    font-size: 20px;
    width: 50%;
    max-width: 500px;
    height: 55px;
    border: none;
    background-color: #2196f3;
  }
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 10px 0 0;
  height: 80%;

  ${FormInputContainer} {
    padding: 0 20px;
    width: 75%;
    max-width: 600px;
    height: 45px;
    input {
      width: 100%;
      height: 100%;
      font-weight: bold;
      border: 2px solid #ffc107;
      border-left: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    label {
      display: flex;
      align-items: center;

      height: 100%;
      color: white;
      margin-right: 0;
      background-color: #ffc107;
      padding: 0 10px;
      width: 300px;

      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    :first-child {
      input {
        border-color: #4caf50;
      }
      label {
        background-color: #4caf50;
      }
    }

    &.password {
      input {
        border-color: #607d8b;
      }
      label {
        background-color: #607d8b;
      }
    }
    &.confirm {
      input {
        border-color: #f44336;
      }
      label {
        background-color: #f44336;
      }
    }
  }
`;
