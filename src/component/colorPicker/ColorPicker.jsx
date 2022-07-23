import { ColorPalletContainer, CircleColorPicker } from "./ColorPicker.styles";
import { CirclePicker } from "react-color";
import { useState } from "react";
export const COLOR_TYPE_TABLE = [
  "#f44336",
  "#9c27b0",
  "#2196f3",
  "#4caf50",
  "#ffeb3b",
];

function ColorPicker({ onColorPick }) {
  const [pickedColor, setPickedColor] = useState("#f44336");
  const colorPickHandler = (color) => {
    onColorPick(color.hex);
    setPickedColor(color.hex);
  };
  return (
    <ColorPalletContainer>
      <CircleColorPicker
        color={pickedColor}
        colors={COLOR_TYPE_TABLE}
        circleSize={26}
        circleSpacing={10}
        width="100%"
        onChange={colorPickHandler}
      />
    </ColorPalletContainer>
  );
}

export default ColorPicker;
