import styled from "styled-components";
import { FormInputContainer } from "../../../UI/formInput/FormInput.styles";
import { rotation, border } from "../../../global.styles";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 800px;
  height: 80vh;

  background-color: white;
  ${border}
  ${rotation}

  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 40px;
    padding: 5px 20px;

    color: #2d2d2d;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    ${border} {
      border-radius: 20px;
    }
  }
  svg {
    margin-right: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 250px;
    border: none;
    background-color: #2196f3;
  }
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px 0;
  height: 80%;

  ${FormInputContainer} {
    padding: 0 20px;

    input {
      width: 100%;
      height: 40px;

      border: 2px solid #ffc107;
      border-left: none;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    label {
      display: flex;
      align-items: center;

      height: 40px;
      color: white;
      margin-right: 0;
      background-color: #ffc107;
      padding: 0 10px;
      width: 260px;

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
