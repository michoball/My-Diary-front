import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  /* position: fixed; */
  top: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid whitesmoke;
  /* box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.5); */
`;

export const LogoContainer = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  height: 100%;
  width: 150px;
  color: #d0d2d7;
  text-transform: uppercase;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
