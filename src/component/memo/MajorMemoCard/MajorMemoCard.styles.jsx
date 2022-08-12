import styled from "styled-components";

export const MajorMemoCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  background-color: ${({ bgcolor }) => `${bgcolor}e5`};
  padding: 10px;

  cursor: pointer;

  :hover {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  }
  :active {
    transform: translateY(1px);
  }
`;

export const MemoContentContainer = styled.div`
  border-top: 1px solid black;
  padding-top: 5px;

  p {
    font-size: 12px;
  }
`;
