import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 900px;
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
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

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
      }
      :hover {
        background-color: unset;
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
  width: 85%;
  padding: 100px 0;

  &.section-main {
    width: 100%;
    padding: 50px 100px 100px;
    background-color: white;
  }
  &.section-label {
    justify-content: center;
    gap: 5%;
    width: 100%;
    background-color: white;

    padding-bottom: 50px;
  }
  &.section-memo {
    width: 100%;
    padding: 100px 7.5%;
  }
  &.section-memoInfo {
    width: 100%;
    flex-direction: column;
    background-color: white;
  }
  &.section-end {
    height: 400px;
  }
`;
export const LabelDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  min-width: 250px;
  height: 350px;

  border-radius: 10px;
`;

export const MemoDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 70%;
  min-width: 400px;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 40px;

  :last-child {
    margin-bottom: 0;
  }

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(243, 233, 231, 0.4) 50%,
    rgba(243, 233, 231, 0.6) 100%
  );
  :nth-child(2) {
    background: linear-gradient(
      90deg,
      rgba(243, 233, 231, 0.6) 0%,
      rgba(243, 233, 231, 0.4) 50%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const ImgContainer = styled.div`
  width: 50%;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(98, 57, 51, 0.3);

  box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
  }

  &.calendar-display {
  }
  &.label-display {
    padding: 10px;
    width: 100%;
    height: 250px;
    box-shadow: none;
    overflow: unset;
    img {
      border-radius: 10px;
    }
  }
  &.memoInfo-display {
    position: relative;
    display: flex;
    align-items: center;
    background-color: unset;
    overflow: hidden;
    width: 54%;
    height: 100%;
    box-shadow: unset;

    :nth-child(2) {
      justify-content: flex-end;
    }

    img {
      width: 85%;
      height: 100%;
      border-radius: 10px;
      &.memo1 {
        width: 100%;
        position: absolute;
      }
      &.memo2 {
        position: absolute;
        left: 50%;
      }
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

  &.calendar-content {
    p {
      margin-left: 20px;
    }
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
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(98, 57, 51, 0.3);
  width: 100%;
  height: 250px;
  svg.logo {
    width: 250px;
    fill: #f2727d;
    margin-bottom: 20px;
  }
`;
