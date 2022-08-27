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
  color: #f2727d;
  padding: 5px;
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

  svg {
    font-size: 20px;
  }
`;

export const ListWrapper = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .loading-container {
    height: 30vh;
  }
`;

export const ListContainer = styled.ul`
  padding: 5px 0;
`;
