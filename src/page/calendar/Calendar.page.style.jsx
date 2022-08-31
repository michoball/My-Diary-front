import styled from "styled-components";

export const CalendarPageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  background-color: #f3e9e7;
  padding: 10px 20px;

  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    height: unset;
  }
`;
