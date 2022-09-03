import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
  color: #623933;
`;

export const LandNavBarContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100px;

  padding: 10px 7.5%;
  z-index: 100;
  transition: all 0.2s ease-in;
  background-color: #f3e9e7;

  &.active {
    top: 10px;
    left: 2%;
    width: 96%;
    height: 80px;
    border-radius: 50px;
    border: 1px solid #f2a7a7;
    background-color: white;
    padding: 10px 5%;
  }

  svg.logo {
    width: 300px;
    fill: #f2727d;
  }
  @media screen and (max-width: 1023px) {
    svg.logo {
      width: 250px;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: #623933;
  .demo {
    background-color: transparent;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    transition: background-color 0.2s ease-in;
    cursor: pointer;
    color: inherit;

    :hover {
      background-color: rgba(98, 57, 51, 0.3);
    }
  }

  a {
    color: #623933;
    font-size: 20px;
    border-radius: 10px;
    padding: 5px 10px;
    transition: background-color 0.2s ease-in;

    :hover {
      background-color: rgba(98, 57, 51, 0.3);
    }
    &.start {
      button {
        font-size: 20px;
        color: white;
      }

      :hover {
        background-color: unset;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    font-size: 18px;
    .demo {
      font-size: 18px;
    }

    a {
      font-size: 18px;
      &.start {
        button {
          width: 150px;
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .demo {
      display: none;
    }
    a {
      display: none;
      &.start {
        display: block;
        button {
          width: 100px;
          font-size: 16px;
        }
      }
    }
  }
`;

export const MainAppDisplayContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 100px;

  &.section-main {
    background-color: white;
  }
  &.section-calendar {
    background-color: #f3e9e7;
  }

  &.section-label {
    justify-content: center;
    background-color: white;
    padding-bottom: 50px;
    height: 700px;

    .labelWrapper {
      display: flex;
      justify-content: center;
      max-width: 1200px;
    }
  }
  &.section-memo {
    background-color: #f3e9e7;
  }
  &.section-memoInfo {
    justify-content: center;
    background-color: white;
    height: 800px;
    .memoInfo-wrapper {
      max-width: 1200px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &.section-end {
    height: 400px;
    justify-content: center;
    background-color: #f3e9e7;
  }

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 30px;
    padding: 50px 0;
    &.section-main,
    &.section-calendar {
      flex-direction: column-reverse;
    }

    &.section-label {
      justify-content: center;
      flex-direction: row;
      gap: 2%;
    }
  }
`;
export const LabelDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  min-width: 250px;
  margin: 0 30px;

  border-radius: 10px;
  @media screen and (max-width: 1023px) {
    width: 250px;
    min-width: 150px;
    height: 250px;
    min-height: 150px;
  }
`;

export const MemoDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid rgba(98, 57, 51, 0.3); */
  padding: 10px;
  min-width: 450px;
  height: 250px;
  border-radius: 10px;
  margin: 30px 10px;

  :last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 1023px) {
    height: 200px;

    margin-bottom: 20px;
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 450px;
  border-radius: 10px;

  background-color: rgba(98, 57, 51, 0.3);
  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
  }
  &.main-display,
  &.calendar-display,
  &.memo-display {
    overflow: hidden;
  }
  &.label-display {
    padding: 10px;
    width: 100%;
    height: 250px;
    box-shadow: none;

    img {
      border-radius: 10px;
    }
  }
  &.memoInfo-display {
    padding: 10px;
    position: relative;
    display: flex;
    align-items: center;
    width: 60%;
    height: 100%;
    box-shadow: unset;

    img {
      border-radius: 10px;
    }

    .memo-sub {
      border: 2px solid rgba(98, 57, 51, 0.3);
      position: absolute;
      top: -10px;
      left: -20px;
      width: 250px;
      height: 60px;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 90%;
    &.label-display {
      width: 95%;
      height: 200px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46%;
  text-align: center;

  h3 {
    font-size: 60px;
    margin-bottom: 10px;
  }
  p {
    font-weight: bold;
    font-size: 30px;
  }

  &.label-content {
    padding: 20px;
    width: 100%;
    p {
      font-size: 18px;
      line-height: 25px;
    }
  }
  &.memoInfo-content {
    height: 100%;
    p {
      font-size: 18px;
      line-height: 25px;
    }
  }
  &.end-content {
    width: 100%;
    h3 {
      margin-bottom: 20px;
    }
  }

  @media screen and (max-width: 1023px) {
    flex-direction: row;
    width: 100%;
    text-align: start;
    h3 {
      font-size: 50px;
      text-align: center;
    }
    p {
      font-weight: bold;
      font-size: 20px;
    }
    &.calendar-content,
    &.memo-content {
      p {
        margin-left: 20px;
      }
    }

    &.label-content {
      padding: 10px;
      text-align: center;
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
    &.memoInfo-content {
      text-align: center;
    }
    &.end-content {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bbb;

  background-color: #795548;
  width: 100%;
  height: 250px;
  svg.logo {
    width: 250px;
    fill: #f2727d;
    margin-bottom: 20px;
  }
`;
