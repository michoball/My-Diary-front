import "./ToggleSwitch.css";

function ToggleSwitch({
  title,
  type,
  allDay,
  onSwitchEvent = () => {},
  ...otherProps
}) {
  const clickToggleHandler = () => {
    onSwitchEvent(!allDay);
  };

  return (
    <div className="toggle-container">
      <span>{title && title}</span>
      <input
        type="checkbox"
        className="toggle"
        id="isToggled"
        checked={allDay ? true : false}
        onChange={() => onSwitchEvent(!allDay)}
        {...otherProps}
      />
      <label htmlFor={type} className="label" onClick={clickToggleHandler}>
        <div className="ball"></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
