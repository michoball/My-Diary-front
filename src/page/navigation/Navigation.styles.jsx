import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  top: 0;
  height: 90px;
  width: 100%;
  min-width: 1200px;

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
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
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
`;

export const UserProfile = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
`;
