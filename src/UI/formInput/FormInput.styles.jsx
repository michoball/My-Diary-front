import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const Input = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  border-bottom: 3px solid gray;
  background-color: transparent;
  outline: none;
  color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s;
    -webkit-text-fill-color: black !important;
  }
`;

export const FromInputLabel = styled.label`
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  letter-spacing: 0.7px;
`;
