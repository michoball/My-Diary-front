import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";
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
        <LogoContainer to="/">
          <Mydiary className="logo"></Mydiary>
        </LogoContainer>
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
        <Link to="/login">Log in</Link>
      </NavigationContainer>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navigation;
