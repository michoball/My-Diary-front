import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Calendar3, Journals } from "react-bootstrap-icons";
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
          <NavLink to="/calendar">
            <Calendar3 />
            Calendar
          </NavLink>
          <NavLink to="/memo">
            <Journals />
            Memo
          </NavLink>
        </NavLinks>
        <div>Log in</div>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
