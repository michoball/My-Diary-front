import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }
  h3 {
    margin: 0 10px;
  }
`;

export const ListColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 25px;
    color: ${({ color }) => `${color}`};
  }
`;
