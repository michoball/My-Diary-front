import styled from "styled-components";
import FormInput from "../../../UI/formInput/FormInput";

export const EditorFromContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  height: calc(100vh - 100px);
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  min-width: 800px;

  border: 3px solid #bbb;
  border-radius: 20px;

  height: 100%;
  background-color: white;
`;

export const BaseHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .save {
    background-color: #f2727d;
    :hover {
      background-color: #f23d4c;
    }
  }
`;

export const EditorFormInput = styled(FormInput)`
  align-items: center;

  border: 3px solid #f2727d93;
  border-radius: 10px;

  margin: 0;
  padding: 5px 10px;

  max-width: 300px;

  label {
    font-size: 14px;
    margin-right: 5px;
  }

  input {
    border-bottom: none;
    padding: 5px 10px;
    font-size: 14px;
  }
`;

export const MyEditor = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  height: 100%;

  overflow-y: scroll;
  .wrapper-class {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .editor {
    background-color: ${({ bgcolors }) => `${bgcolors}`};
    padding: 10px;

    border: 2px solid #2b2b2b !important;
    border-radius: 10px;
  }

  .toolbar-class {
    border: 2px solid #2b2b2b !important;

    border-radius: 10px;
  }
`;
