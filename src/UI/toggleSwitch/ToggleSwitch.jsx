import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ switchData, allDay, onSwitchEvent }) {
  // const [isAllDay, setIsAllDay] = useState(allDay);

  const clickToggleHandler = () => {
    // setIsAllDay(!isAllDay);
    onSwitchEvent(!allDay);
  };

  return (
    <div class="toggle-container">
      <span>{switchData.title}</span>
      <input
        type="checkbox"
        className="toggle"
        id="isToggled"
        checked={allDay ? true : false}
        onChange={() => onSwitchEvent(!allDay)}
      />
      <label
        htmlFor={switchData.type}
        className="label"
        onClick={clickToggleHandler}
      >
        <div class="ball"></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
