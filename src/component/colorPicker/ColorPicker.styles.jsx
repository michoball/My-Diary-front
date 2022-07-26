import styled from "styled-components";
import { CirclePicker } from "react-color";

export const ColorPalletContainer = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleColorPicker = styled(CirclePicker)`
  display: flex;
  align-items: center;
  justify-content: center;
  span div :focus {
    transform: scale(1);
    width: 20px;
    height: 20px;
    box-shadow: ${({ color }) => color} 0px 0px 0px 3px inset,
      ${({ color }) => color} 0px 0px 5px !important;
    transition: box-shadow 200ms ease !important;
  }
  span div {
    transition: box-shadow 200ms ease !important;
  }
`;
