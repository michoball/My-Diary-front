import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;

  label {
    margin-right: 10px;
    font-weight: bold;
  }

  select {
    border: 2px solid black;
    border-radius: 10px;
    padding: 1px;
    width: 120px;
    text-align: center;
  }
`;
