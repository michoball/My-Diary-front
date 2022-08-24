import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";
import { Calendar3, Journals } from "react-bootstrap-icons";
import {
  NavigationContainer,
  NavLink,
  NavLinks,
  UserProfileContainer,
  LogoContainer,
  UserProfile,
} from "./Navigation.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/user/user.select";
import { logout } from "../../features/user/user.thunk";
import { userReset } from "../../features/user/userSlice";
import { memoReset } from "../../features/memo/memoSlice";
import { calendarReset } from "../../features/calendar/calendarSlice";
import { defaultProfile } from "../../assets/defaultProfile";

const Navigation = () => {
  const currentUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout()).then(() => {
      dispatch(userReset());
      dispatch(memoReset());
      dispatch(calendarReset());
    });
    navigate("/");
  };
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
        <UserProfileContainer>
          <UserProfile
            src={currentUser.avatar ? currentUser.avatar : defaultProfile}
            alt="userAvatar"
          />
          <p>{currentUser.displayName}</p>
          <button onClick={logoutHandler} className="logout">
            Log out
          </button>
        </UserProfileContainer>
      </NavigationContainer>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Navigation;
