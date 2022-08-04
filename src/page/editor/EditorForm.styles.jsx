import styled from "styled-components";
import FormInput from "../../UI/formInput/FormInput";

export const EditorFromContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  width: auto;
  min-width: 600px;

  margin: 0 auto;

  border: 3px solid #bbb;
  border-radius: 10px;

  background-color: white;
`;

export const BaseHeaderContainer = styled.div`
  width: 100%;
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

  border: 3px solid #bbb;
  border-radius: 10px;

  padding: 5px 10px;
  margin: 0;

  label {
    font-size: 14px;
    margin-right: 5px;
  }

  input {
    width: 150px;
    max-width: 400px;

    border-bottom: none;
    padding: 5px 10px;
    font-size: 14px;
  }
`;

export const MyEditor = styled.div`
  background-color: white;

  border-radius: 10px;
  padding: 20px 0;
  display: flex;

  .wrapper-class {
    margin: 0 auto;
  }
  .editor {
    background-color: white;
    padding: 10px;

    height: calc(55vh - 60px);

    border: 3px solid rgba(242, 114, 125, 1) !important;
    border-radius: 10px;
    overflow-y: scroll;
  }

  .toolbar-class {
    border: 3px solid rgba(242, 114, 125, 1) !important;

    border-radius: 10px;
  }
`;

// export const HeaderBtnContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// `;

export const PreViewContainer = styled.div`
  width: auto;
  min-width: 500px;
  margin-left: 20px;
  padding: 20px;

  border: 3px solid #bbb;
  border-radius: 10px;

  background-color: white;
`;
