import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  top: 0;
  height: 60px;
  width: 100%;
  min-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 30px;
  border-bottom: 3px solid #bbb;
  background-color: white;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    padding: 3px;
    border: 2px solid #f2727d;
    border-radius: 10px;
    width: 180px;
    fill: #f2727d;
    transform: rotate3d(-1, 1, 0, 10deg);
    box-shadow: -1px -1px 5px rgba(0, 0, 0, 0.5);
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

  font-size: 20px;
  padding: 10px 15px;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 5px 10px;

  border: 2px solid #bbb;
  border-radius: 10px;

  background-color: #d2d2d2;

  p {
    margin-right: auto;
    margin-left: 10px;
  }

  .logout {
    background-color: blanchedalmond;
    font-size: 16px;
    border-radius: 10px;
    padding: 5px 8px;

    cursor: pointer;

    transition: background-color 0.3s ease-in, transform 0.3s ease-in;
    :hover {
      background-color: #f2727d;
      transform: scale(0.98);
    }
  }
`;

export const UserProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
