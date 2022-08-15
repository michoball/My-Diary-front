import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  top: 0;
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 30px;
  border-bottom: 3px solid #bbb;
  background-color: white;

  .login {
    font-size: 18px;
    font-weight: 600;
  }
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
