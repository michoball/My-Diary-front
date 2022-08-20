import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2196f3;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #bbb;

  font-weight: bold;
  color: whitesmoke;

  cursor: pointer;

  &.delete {
    background-color: rgba(245, 12, 4, 0.7);
  }

  svg {
    margin-right: 5px;
  }
  :active {
    transform: scale(0.98);
  }
`;

export const CreateButton = styled(BaseButton)`
  width: 80px;
  background-color: blanchedalmond;
  color: black;
  border: 2px solid black;
  svg {
    font-size: 20px;
  }
`;

export const BanButton = styled(BaseButton)`
  background-color: rgba(255, 0, 0, 0.7);
  width: 80px;

  color: black;
  border: 2px solid black;

  margin-right: 10px;

  svg {
    font-size: 20px;
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
