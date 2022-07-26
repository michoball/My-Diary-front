import { PlusCircle } from "react-bootstrap-icons";
import { useState } from "react";
import EventInput from "../eventInput/EventInput";
import Modal from "../modal/Modal";
import { CreateButtonContainer } from "./CreateButton.styles";

const CreateButton = () => {
  const [isInputFrom, setIsInputFrom] = useState(false);

  const showInputFromHandler = () => {
    setIsInputFrom(!isInputFrom);
  };

  return (
    <>
      {isInputFrom && (
        <Modal toggleModal={() => setIsInputFrom(!isInputFrom)}>
          <EventInput onConfirm={() => setIsInputFrom(!isInputFrom)} />
        </Modal>
      )}
      <CreateButtonContainer type="click" onClick={showInputFromHandler}>
        <PlusCircle /> create
      </CreateButtonContainer>
    </>
  );
};

export default CreateButton;
