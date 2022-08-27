import styled from "styled-components";

export const MemoContainer = styled.div`
  padding: 0 15px;
  word-break: break-word;
  overflow: hidden;
  font-size: 14px;

  color: black;
`;

export const MemoCardHeader = styled.header`
  display: flex;
  align-items: center;

  padding: 0 0 10px 5px;
  margin: 0 10px 10px 10px;

  font-weight: bold;
  font-size: 20px;

  color: #623933;

  border-bottom: 1px solid #623933;
  svg {
    position: absolute;
    right: 5%;
    top: 5%;
    fill: ${({ major }) => (major ? "#FF8A05" : "transparent")};
  }
`;
