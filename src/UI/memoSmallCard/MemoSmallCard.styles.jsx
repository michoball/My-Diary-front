import styled from "styled-components";

export const MemoContainer = styled.div`
  padding: 0 15px;
  word-break: break-word;
  overflow: hidden;
  font-size: 14px;
`;

export const MemoCardHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;

  padding: 0 0 10px 15px;
  margin-bottom: 10px;

  font-weight: bold;
  font-size: 20px;

  color: #2d2d2d;
  svg {
    position: absolute;
    right: 40px;
    bottom: 12px;
    fill: ${({ major }) => (major ? "#ffc107" : "transparent")};
  }
`;
