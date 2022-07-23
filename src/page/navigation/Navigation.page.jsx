import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./Navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">My Diary</LogoContainer>
        <NavLinks>
          <NavLink to="/calendar">CALENDAR</NavLink>
          <NavLink to="/memo">MEMO</NavLink>
        </NavLinks>
        <div>Log in</div>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
