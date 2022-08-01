import styled from "styled-components";
import { FormInputContainer } from "../../UI/formInput/FormInput.styles";

export const EventEditcontainer = styled.div`
  position: relative;
  border-radius: 10px;
  border-top-right-radius: 0;
  flex-direction: column;
  border: 3px solid black;
  background-color: white;
  padding: 10px;
`;

export const EventToggerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5px;
  right: -32px;
  overflow: hidden;
`;

export const EventTogger = styled.button`
  position: relative;
  background-color: white;
  height: 50px;
  width: 30px;

  border: 1px solid black;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: bold;

  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background-color: #f2727d;
    border-top-right-radius: 15px;
  }

  :hover {
    border-top-right-radius: 15px;
    background-color: #f23d4c;
  }
  :active {
    transform: translateX(-2px);
  }

  :disabled {
    &.active {
      color: unset;
    }
  }
`;

export const EditInputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const BasicInputBg = styled.div`
  padding: 10px;
  width: 300px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px;

  background-color: blanchedalmond;
  border: 2px solid #bbb;
  border-radius: 10px;
`;

export const EventEditForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${FormInputContainer} {
    margin-bottom: 20px;
  }

  input[type="datetime-local"],
  input[type="date"] {
    font-weight: bold;
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }
`;

export const ColorSection = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const ConfirmBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: rgba(0, 132, 255, 0.7);
  border: 2px solid #bbb;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 5px;

  color: whitesmoke;
  cursor: pointer;

  &.delete {
    background-color: rgba(245, 12, 4, 0.7);
  }

  :hover {
    transform: scale(0.98);
  }

  svg {
    margin-right: 5px;
  }
`;

export const CancelBtn = styled.button`
  position: absolute;
  top: -30px;
  right: -10px;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
`;
