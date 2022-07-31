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
`;

export const LogoContainer = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  width: 150px;
  color: #f2727d;
  text-transform: uppercase;
  text-shadow: 2px 2px 0px rgba(242, 167, 167, 0.8);
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;
