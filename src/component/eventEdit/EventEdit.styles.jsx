import styled from "styled-components";
import FormInput from "../../UI/formInput/FormInput";

export const EventEditcontainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;

  align-items: center;
`;

export const EventFormInput = styled(FormInput)`
  margin-bottom: 20px;

  &.title {
    margin-bottom: 30px;
  }
`;

export const EventEditForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 60px;

  input[type="datetime-local"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;

  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ConfirmBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: rgba(0, 132, 255, 0.5);
  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 5px;
  font-size: 14px;
  color: whitesmoke;
  cursor: pointer;

  &.delete {
    background-color: rgba(245, 12, 4, 0.5);
  }

  :hover {
    transform: scale(0.98);
  }

  svg {
    margin-right: 3px;
  }
`;

export const CancelBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
  color: red;
  font-size: 20px;

  cursor: pointer;
  z-index: 10;
`;

export const ColorSection = styled.div`
  position: absolute;
  bottom: 40px;
  left: 10px;
  width: 300px;
  height: 90px;

  label {
    font-weight: bold;
    font-size: 20px;
  }
`;
export const OptionContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 175px;
  height: 100px;
  padding: 5px;

  border: 2px solid black;
  border-radius: 10px;
`;
