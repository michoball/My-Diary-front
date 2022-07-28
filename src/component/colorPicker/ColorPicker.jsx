import { ColorPalletContainer, CircleColorPicker } from "./ColorPicker.styles";

import { useState, useEffect } from "react";
export const COLOR_TYPE_TABLE = [
  "#f44336",
  "#9c27b0",
  "#2196f3",
  "#4caf50",
  "#ffeb3b",
  "#ff9f89",
];

function ColorPicker({ onColorPick, colorSelected }) {
  const [pickedColor, setPickedColor] = useState(colorSelected);
  useEffect(() => {
    setPickedColor(colorSelected);
  }, [colorSelected]);

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
