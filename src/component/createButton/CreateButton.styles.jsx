import styled from "styled-components";

export const CreateButtonContainer = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;
  background-color: blanchedalmond;
  height: 40px;
  width: 100px;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 10;
  cursor: pointer;
  svg {
    font-size: 16px;
    margin-right: 5px;
  }
  :active {
    transform: scale(0.98);
  }
`;
