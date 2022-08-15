import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  overflow: hidden;

  &.title {
    margin-bottom: 25px;
  }
  &.time {
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  input[type="datetime-local"],
  input[type="date"],
  input[type="time"] {
    font-weight: bold;
    ::-webkit-calendar-picker-indicator {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  padding: 5px 10px;

  font-size: 14px;

  border: none;
  border-bottom: 3px solid #bbb;
  background-color: transparent;

  outline: none;
  color: black;

  :disabled {
    border-radius: 10px;
    border-bottom: 3px solid white;
    background-color: rgba(43, 43, 43, 0.8);
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: black !important;
  }
`;

export const FromInputLabel = styled.label`
  margin-right: 10px;
  color: black;
  font-weight: bold;
  letter-spacing: 0.7px;
  white-space: nowrap;
`;
