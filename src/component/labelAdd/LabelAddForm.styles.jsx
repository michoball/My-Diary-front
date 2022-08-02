import styled from "styled-components";

export const LabelInputcontainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 3px solid black;
  background-color: white;
  padding: 10px;
`;

export const LabelInputForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;

  .groupTitle {
    width: 100%;
  }
`;

export const AllDayBtn = styled.div`
  display: flex;
  align-items: center;

  .toggle-label {
    font-weight: bold;
    width: 50px;
    margin: 10px 0;
  }
`;

export const ColorSection = styled.div`
  label {
    font-weight: bold;
  }
`;

export const AddBtn = styled.button`
  width: 100px;
  height: 50px;

  margin-left: auto;
  background-color: rgba(0, 132, 255, 0.5);
  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

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
