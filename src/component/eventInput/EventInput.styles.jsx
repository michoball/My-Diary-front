import styled from "styled-components";
import FormInput from "../../UI/formInput/FormInput";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
`;
export const EventFormInput = styled(FormInput)`
  margin-bottom: 20px;

  &.title {
    margin-bottom: 30px;
  }
`;

export const InputForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
`;

export const OptionContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 175px;
  height: 100px;
  padding: 5px;

  border: 2px solid black;
  border-radius: 10px;
`;

export const ColorSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 300px;
  height: 100px;

  label {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: rgba(0, 132, 255, 0.5);
  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-size: 16px;
  color: whitesmoke;
  svg {
    margin-right: 5px;
  }
`;
