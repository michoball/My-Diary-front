import styled from "styled-components";

export const MemoCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 230px;
  height: 200px;

  background-color: ${({ bgcolor }) => `${bgcolor}80`};

  cursor: pointer;

  :hover {
    transform: translate(-1px, -2px);
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-in;
  }
  :active {
    transform: translate(0, 0);
  }

  ::before {
    content: "";
    position: absolute;
    top: -16px;
    right: -16px;

    border: 15px solid transparent;
    border-bottom-color: white;
    transform: rotateZ(45deg);
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
  }

  header {
    padding: 0 0 5px 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #2d2d2d;
    font-weight: 700;
  }
`;

export const MemoContainer = styled.div`
  word-break: break-word;
  overflow: hidden;
`;
