import styled from "styled-components";

export const MemoViewContainer = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px;

  width: 100%;
  height: calc(100vh - 100px);

  background-color: white;
  border: 3px solid #bbb;
  border-radius: 20px;
`;

export const MemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;
  height: 100%;
  padding: 10px;

  border: 1px solid black;
  border-radius: 10px;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);

  background-color: ${({ bgcolors }) => `${bgcolors}`};
`;
