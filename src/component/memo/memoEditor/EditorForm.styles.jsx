import styled from "styled-components";
import FormInput from "../../../UI/formInput/FormInput";

export const EditorFromContainer = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1200px;

  padding: 10px;

  height: calc(100vh - 80px);
`;

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  min-width: 800px;

  border: 3px solid rgb(242, 167, 167);
  border-radius: 20px;

  height: 100%;
  background-color: white;
`;

export const BaseHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  .date {
    font-weight: bold;
  }
`;

export const StarDateContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ToggleMainBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 20px;
    fill: ${({ major }) => (major ? "#ffc107" : "black")};
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

  border: 3px solid #bbb;
  border-radius: 10px;

  margin: 0;
  padding: 5px 10px;

  max-width: 500px;

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
    background-color: ${({ bgcolors }) => `${bgcolors}cc`};
    padding: 10px 20px;

    border: 2px solid #2b2b2b !important;
    border-radius: 10px;

    .public-DraftEditorPlaceholder-inner {
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
    }
  }

  .toolbar-class {
    border: 2px solid #2b2b2b !important;
    border-radius: 10px;
  }
`;
