import styled from "styled-components";

export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWrapperStyle = styled.div`
  position: fixed;
  top: 30vh;
  left: 20%;
  width: 600px;
  height: 500px;
  z-index: 100;
  background-color: white;
`;
