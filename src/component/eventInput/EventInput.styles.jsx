import styled from "styled-components";
import { FormInputContainer } from "../../UI/formInput/FormInput.styles";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
`;
export const EventInputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const BasicInput = styled.div`
  padding: 10px;
  width: 300px;
`;

export const AdvanceInput = styled.div`
  width: 300px;
  padding: 10px;
  background-color: blanchedalmond;
  border: 2px solid #bbb;
  border-radius: 10px;
`;
export const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputForm = styled.form`
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
  margin: 10px 0;

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

export const SubmitBtn = styled.button`
  width: 200px;
  height: 40px;
  background-color: rgba(0, 132, 255, 0.7);
  border: 2px solid #bbb;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: whitesmoke;
  cursor: pointer;
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
