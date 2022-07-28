import styled from "styled-components";

export const ListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 5px;

  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
  }

  :last-child {
    border-bottom: none;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`;

export const ListInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  transform: translateY(30%);
  margin-left: 10px;
  font-size: 10px;

  span {
    margin-right: 5px;
  }
`;
export const ListColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 18px;
    color: ${({ color }) => `${color}`};
  }
`;

export const ButtonContainer = styled.div`
  width: 30px;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;

  cursor: pointer;

  :active {
    transform: scale(0.98);
  }
  svg {
    font-size: 14px;
    color: red;
  }
`;
