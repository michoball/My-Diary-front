import { Link } from "react-router-dom";
import styled from "styled-components";
import { rotation, border } from "../../global.styles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const LandNavBarContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  background-color: white;

  padding: 10px 20px;
  z-index: 100;
  transition: all 0.3s ease-in;

  &.active {
    top: 10px;
    left: 1%;
    width: 98%;
    border-radius: 50px;
    border: 3px solid #f2a7a7;
  }

  svg {
    background-color: white;
    margin-left: 20px;
    width: 220px;
    fill: #f2727d;
    padding: 5px;
    border: 2px solid #f2727d;
    border-radius: 10px;

    /* ${rotation} {
      box-shadow: -3px -3px 10px rgba(0, 0, 0, 0.5);
    } */
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #bbb;
`;

export const MainAppDisplayContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  background-color: white;
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  padding: 70px 0 70px 0;

  &.section-calendar {
    padding-bottom: 50px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 60%;
  height: 420px;
  border: 3px solid #bbb;
  border-radius: 20px;
  padding: 10px;
  background-color: white;

  &.calendar-display {
    /* width: 600px; */
    /* height: 380px; */
  }

  &.label-display {
    display: flex;
    /* width: 650px; */
    /* height: 350px; */
    img {
      width: 50%;
    }
  }

  &.memo-display {
    /* width: 680px; */
    /* height: 400px; */
  }
  ::before {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 5%;
    width: 90%;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;

    filter: blur(10px);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  width: 30%;
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
  height: 3px;
  border-radius: 10px;
  background-color: #f2a7a7;
`;
