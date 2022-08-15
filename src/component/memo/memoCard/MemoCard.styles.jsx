import styled from "styled-components";

export const MemoCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 10px;
  width: 100%;
  height: 220px;
  border-radius: 20px;

  background-color: ${({ bgcolor }) => `${bgcolor}99`};
  box-shadow: -2px -2px 0 rgba(0, 0, 0, 0.4);

  cursor: pointer;

  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${({ bgcolor }) => `${bgcolor}cc`};
    transform: translate(-1px, -2px);
    box-shadow: -2px -2px 0 rgba(0, 0, 0, 0.4), -1px -3px 5px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease-in;
  }
  :active {
    transform: translate(0, 0);
  }

  ::before {
    content: "";
    position: absolute;
    top: -33px;
    right: -33px;
    border: 28px solid transparent;
    border-bottom-color: white;
    transform: rotateZ(45deg);
  }

  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-bottom: 1px solid black;
    border-bottom-left-radius: 25px;
    border-left: 1px solid black;
  }
`;
