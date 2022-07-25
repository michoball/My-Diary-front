import styled from "styled-components";

export const CategoryViewContainer = styled.div`
  padding: 0 10px;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  h2 {
    padding: 5px 0;
    border-bottom: 1px solid #d2d2d2;
  }
`;

export const ListContainer = styled.div`
  padding: 5px 0;
`;
