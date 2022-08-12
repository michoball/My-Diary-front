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
  border: 3px solid rgb(242, 167, 167);
  border-radius: 20px;
`;

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 650px;
  max-width: 1000px;

  height: 100%;
  padding: 10px 20px;

  border-radius: 10px;

  overflow-y: scroll;

  background-color: ${({ bgcolors }) => `${bgcolors}`};
`;

export const MemoHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 700px;

  margin-bottom: 10px;
  .date {
    position: absolute;
    right: 0;
    bottom: 0;
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
