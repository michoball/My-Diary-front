import styled from "styled-components";

export const ListContainer = styled.li`
  margin: 5px 0;

  :last-child {
    border-bottom: none;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;
  border-radius: 10px;
  cursor: pointer;

  transition: background-color 0.2s ease-in;
  :hover {
    background-color: ${(props) => props.theme.bg.main};
  }
`;

export const ListItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  letter-spacing: 1px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ListInfoContainer = styled.div`
  position: absolute;
  right: 10px;

  transform: translateY(50%);
  font-size: 10px;
`;
export const ListColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 10px;
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
    color: ${(props) => props.theme.button.underline};
  }
`;
