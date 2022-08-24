import styled from "styled-components";

export const ListContainer = styled.li`
  margin: 5px 0;
  padding-bottom: 5px;

  border-bottom: 1px solid #d1d1d1;

  :last-child {
    border-bottom: none;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  border-radius: 10px;
  cursor: pointer;

  transition: background-color 0.2s ease-in;
  :hover {
    background-color: #e1e1e1;
  }
`;

export const ListItemContainer = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
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
    font-size: 20px;
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
    font-size: 16px;
    color: red;
  }
`;
