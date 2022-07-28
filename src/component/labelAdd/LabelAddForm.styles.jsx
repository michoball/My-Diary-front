import styled from "styled-components";
import FormInput from "../../UI/formInput/FormInput";

export const LabelInputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
`;

export const LabelFormInput = styled(FormInput)`
  margin-bottom: 20px;
`;

export const LabelInputForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
`;

export const AllDayBtn = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;

  .toggle-label {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    margin: 10px 0;
  }
`;

export const ColorSection = styled.div`
  width: 300px;
  height: 100px;

  label {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const AddBtn = styled.button`
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
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }
  svg {
    margin-right: 5px;
  }
`;
