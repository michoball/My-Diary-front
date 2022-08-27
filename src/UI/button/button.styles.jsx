import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(33, 150, 243, 0.7);
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: none;

  font-weight: bold;
  color: whitesmoke;
  letter-spacing: 1px;

  cursor: pointer;

  &.delete {
    background-color: rgba(245, 12, 4, 0.7);
  }

  svg {
    margin-right: 10px;
  }
  :active {
    transform: scale(0.98);
  }
`;

export const CreateButton = styled(BaseButton)`
  width: 100px;
  background-color: blanchedalmond;
  color: #623933;
  svg {
    font-size: 20px;
  }
`;

export const BanButton = styled(BaseButton)`
  background-color: #f23d4c;
  border-radius: 10px;
  width: 100px;
  color: #623933;
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
