import { PlusCircle } from "react-bootstrap-icons";
import { useState } from "react";
import { CreateButtonContainer } from "./CreateButton.styles";
import { useDispatch } from "react-redux";
import { customLabelActions } from "../../features/customLabel/customLabelSlice";
import EventInput from "../eventInput/EventInput";

const CreateButton = () => {
  const [isInputFrom, setIsInputFrom] = useState(false);
  const dispatch = useDispatch();

  const showInputFromHandler = () => {
    dispatch(customLabelActions.clearLabel());
    setIsInputFrom(!isInputFrom);
  };

  return (
    <>
      {isInputFrom && (
        <EventInput onConfirm={() => setIsInputFrom(!isInputFrom)} />
      )}
      <CreateButtonContainer type="click" onClick={showInputFromHandler}>
        <PlusCircle /> create
      </CreateButtonContainer>
    </>
  );
};

export default CreateButton;
