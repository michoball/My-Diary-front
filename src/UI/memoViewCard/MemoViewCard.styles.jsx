import styled from "styled-components";

export const MemoViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 50px 20px 50px;
  width: 100%;
  height: 80vh;

  background-color: white;

  border-radius: 10px;
  border: 2px solid #f2727d;
`;

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  min-width: 650px;
  max-width: 1000px;

  height: 100%;
  padding: 10px 20px;
  margin: 10px 0;

  background-color: ${({ bgcolors }) => `${bgcolors}cc`};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
`;

export const MemoHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  padding-bottom: 10px;
  width: 700px;

  margin-bottom: 10px;

  border-bottom: 3px solid #2d2d2d;

  .date {
    position: absolute;
    right: 0;
    bottom: 5px;
  }
  h1 {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
  }
  svg {
    display: ${({ major }) => (major ? "block" : "none")};
    margin-left: 10px;
    fill: #ffc107;
  }
`;
