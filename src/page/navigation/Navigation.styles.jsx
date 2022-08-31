import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  top: 0;
  height: 90px;
  width: 100%;
  /* min-width: 1200px; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  background-color: #f3e9e7;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 300px;
    fill: #f2727d;
  }

  @media screen and (max-width: 1023px) {
    svg {
      width: 250px;
    }
  }
  @media screen and (max-width: 767px) {
    svg {
      width: 200px;
    }
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 1023px) {
    gap: 10px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  color: #623933;
  font-size: 20px;
  padding: 10px 15px;
  cursor: pointer;

  transition: background-color 0.2s ease-in;
  svg {
    margin-right: 10px;
  }
  :hover {
    border-radius: 10px;
    background-color: #6239332f;
  }

  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    font-size: 20px;
    p {
      display: none;
    }
    svg {
      margin-right: 5px;
    }
    :hover {
      color: black;
      background-color: transparent;
    }
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;

  color: #623933;

  p {
    font-weight: bold;
    margin-right: auto;
    margin-left: 10px;
  }

  .logout {
    margin-left: 10px;
    width: 120px;
    height: 40px;

    border: none;
    color: white;
    background-color: #f2a7a7;
    border-radius: 10px;
    padding: 5px 8px;

    cursor: pointer;

    transition: background-color 0.2s ease-in;
    :hover {
      background-color: #f23d4c;
    }
  }
  @media screen and (max-width: 1023px) {
    font-size: 14px;
    min-width: 250px;
    .logout {
      margin-left: 5px;
      width: 100px;
      height: 35px;

      padding: 5px 8px;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 12px;

    min-width: 200px;
    .logout {
      font-weight: bold;
      background-color: transparent;
      border-radius: 0;
      color: #f2727d;
      margin-left: 0;
      width: 60px;
      height: unset;

      padding: 0;
      :hover {
        color: #f23d4c;
        background-color: transparent;
      }
    }
  }
`;

export const UserProfile = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  @media screen and (max-width: 1023px) {
    width: 30px;
    height: 30px;
  }
`;
