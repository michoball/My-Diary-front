import styled from "styled-components";

export const CreateButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: blanchedalmond;
  height: 40px;
  width: 90px;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;
  svg {
    margin-right: 5px;
  }
  :active {
    transform: scale(0.98);
  }
`;
