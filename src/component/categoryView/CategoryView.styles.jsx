import styled from "styled-components";

export const CategoryViewContainer = styled.div`
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 5px 0;
  border-bottom: 1px solid #d2d2d2;
`;

export const CategoryAddBtn = styled.button`
  display: flex;

  background-color: transparent;
  border: none;

  font-weight: bold;
  font-size: 20px;

  cursor: pointer;

  :active {
    transform: scale(0.95);
  }
`;

export const ListWrapper = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const ListContainer = styled.ul`
  padding: 5px 0;
`;
