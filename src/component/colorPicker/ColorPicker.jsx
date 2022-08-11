import { ColorPalletContainer, CircleColorPicker } from "./ColorPicker.styles";

import { useState, useEffect } from "react";
export const COLOR_TYPE_TABLE = [
  "#f44336",
  "#ffeb3b",
  "#ff9f89",
  "#ffc107",
  "#cddc39",
  "#4caf50",
  "#2196f3",
  "#607d8b",
  "#795548",
  "#9c27b0",
];

function ColorPicker({
  onColorPick,
  colorSelected = "",
  disable,
  newColorTable = null,
}) {
  const [colorTable, setColorTable] = useState(COLOR_TYPE_TABLE);
  const [pickedColor, setPickedColor] = useState(colorSelected);
  useEffect(() => {
    if (colorSelected) {
      setPickedColor(colorSelected);
    }
  }, [colorSelected]);

  useEffect(() => {
    if (newColorTable) {
      setColorTable(newColorTable);
    }
  }, [newColorTable]);

  const colorPickHandler = (color) => {
    onColorPick(color.hex);
    setPickedColor(color.hex);
  };

  return (
    <ColorPalletContainer>
      <span className={`warning ${disable && "disable"}`}>
        you can't change color in this mode
      </span>
      <CircleColorPicker
        color={pickedColor}
        colors={colorTable}
        circleSize={26}
        circleSpacing={10}
        width="100%"
        onChange={disable ? null : colorPickHandler}
      />
    </ColorPalletContainer>
  );
}

export default ColorPicker;
