import styled from "styled-components";
import FormInput from "../../../UI/formInput/FormInput";
import { border } from "../../../global.styles";

export const EditorFromContainer = styled.div`
  width: 100%;
  min-width: 600px;
  padding: 10px 0 30px 10px;
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  ${border}

  height: 100%;
  background-color: white;
`;

export const BaseHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 0;

  .date {
    font-weight: bold;
  }
`;

export const StarDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToggleMainBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 25px;
    fill: ${({ major }) => (major ? "#FF8A05" : "black")};
  }

  :focus {
    svg {
      animation: clicked 0.5s ease;
    }
  }

  @keyframes clicked {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const EditorFormInput = styled(FormInput)`
  align-items: center;

  border: 2px solid #623933;
  border-radius: 10px;

  margin: 0;
  padding: 5px 10px;

  max-width: 500px;

  label {
    font-size: 18px;
    margin-right: 5px;
  }

  input {
    border-bottom: none;
    padding: 3px 10px;
    font-size: 18px;
  }
`;

export const MyEditor = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 10px;
  height: 100%;
  color: black;
  overflow-y: scroll;

  .wrapper-class {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .editor {
    background-color: ${({ bgcolors }) => `${bgcolors}b2`};
    padding: 10px 20px;
    height: calc(100% - 40px);
    border: 2px solid #623933 !important;
    border-radius: 10px;

    .public-DraftEditorPlaceholder-inner {
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
    }
    @media screen and (max-width: 1023px) {
      height: 400px;
      .DraftEditor-editorContainer,
      .DraftEditor-root,
      .public-DraftEditor-content {
        height: calc(100% - 40px);
      }
    }
  }

  .toolbar-class {
    border: 2px solid #623933 !important;
    border-radius: 10px;
    margin-bottom: 20px;
  }
`;
