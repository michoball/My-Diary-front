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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    display: flex;
    align-items: center;
    padding-top: 20px;
    color: #2d2d2d;
    font-size: 20px;

    svg {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }
  }

  .Logo {
    padding: 3px;
    border: 2px solid #f2727d;
    border-radius: 10px;
    width: 220px;
    fill: #f2727d;
    transform: rotate3d(-1, 1, 0, 10deg);
    box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.5);
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
