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
  height: 80px;

  padding: 10px 20px;
  z-index: 100;
  transition: all 0.3s ease-in;
  background-color: #f3e9e7;
  &.active {
    top: 10px;
    left: 1%;
    width: 98%;
    border-radius: 50px;
    border: 3px solid #f2a7a7;
    background-color: whitesmoke;
  }

  svg {
    margin-left: 20px;
    width: 250px;
    fill: #f2727d;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #bbb;

  a {
    border-radius: 10px;
    padding: 10px 15px;
    transition: background-color 0.2s ease-in;

    :hover {
      background-color: rgba(98, 57, 51, 0.3);
    }
    &.start {
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
  justify-content: space-around;
  width: 90%;
  padding: 100px 0;
  gap: 30px;

  &.section-label {
    justify-content: center;
    width: 100%;
    background-color: whitesmoke;
    padding-bottom: 50px;
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

export const ImgContainer = styled.div`
  width: 700px;
  height: 450px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 0 30px rgba(98, 57, 51, 0.7);
  img {
    width: 100%;
    height: 100%;
  }

  &.calendar-display {
    /* width: 600px; */
    /* height: 380px; */
  }
  &.label-display {
    padding: 10px;
    width: 100%;
    height: 250px;
    box-shadow: none;
    background-color: rgba(98, 57, 51, 0.3);

    img {
      border-radius: 10px;
    }
  }
  &.memo-display {
    /* width: 680px; */
    /* height: 400px; */
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  h3 {
    font-size: 60px;
  }
  p {
    font-weight: bold;
    font-size: 30px;
  }

  &.calendar-content {
    h3 {
      font-size: 60px;
      margin-bottom: 10px;
    }
    p {
      margin-left: 20px;
      font-weight: bold;
      font-size: 30px;
    }
  }
  &.label-content {
    padding: 20px;
    width: 95%;
    p {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
  }
  &.memo-content {
    h3 {
      font-size: 60px;
      margin-bottom: 10px;
    }
    p {
      margin-left: 20px;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const Partition = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 10px;
  background-color: #f2a7a7b3;
`;
