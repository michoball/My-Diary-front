import { useEffect, useState } from "react";
import { DefaultCalendar } from "../../utill/calendar/Calendar.config";
import { useDispatch, useSelector } from "react-redux";
import { selectCalendarEvents } from "../../features/calendar/calendar.select";
import { selectRecentOrderMemoLists } from "../../features/memo/memo.select";
import MemoCard from "../../component/memo/memoCard/MemoCard";
import { HOME_DEFAULT_MEMO, HOME_DEFAULT_EVENT } from "./HomeDefaultMemo";

import { Calendar3, Journals } from "react-bootstrap-icons";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";
import {
  HomeCalendar,
  HomeContainer,
  CalendarWrapper,
  HomeNavContainer,
  MemosContianer,
  MemosWrapper,
  NavContainer,
  NavNLoginContainer,
  RightSideContainer,
  NavLink,
  LoginContainer,
} from "./Home.styles";
import SignInForm from "../../component/auth/sign-in/SignIn";
import { selectUser } from "../../features/user/user.select";
import { reset } from "../../features/user/userSlice";
import { logout } from "../../features/user/user.thunk";
import { getMemos } from "../../features/memo/memo.thunk";
import { memoReset } from "../../features/memo/memoSlice";
import { calendarReset } from "../../features/calendar/calendarSlice";
import { getCalendars } from "../../features/calendar/calendar.thunk";

function Home() {
  const dispatch = useDispatch();
  const eventList = useSelector(selectCalendarEvents);
  const memoLists = useSelector(selectRecentOrderMemoLists);
  const user = useSelector(selectUser);
  const [memoCards, setMemoCards] = useState([]);

  useEffect(() => {
    if (user) {
      dispatch(getMemos());
      dispatch(getCalendars());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (memoLists.length !== 0) {
      console.log(memoLists.length);
      changeMemoList(memoLists);
    } else {
      changeMemoList(HOME_DEFAULT_MEMO);
    }
  }, [memoLists]);

  const logoutHandler = () => {
    dispatch(logout()).then(() => {
      dispatch(reset());
      dispatch(memoReset());
      dispatch(calendarReset());
    });
  };

  const changeMemoList = (list) => {
    setMemoCards(list.length > 7 ? list.slice(0, 7) : list);
  };
  return (
    <HomeContainer>
      <HomeNavContainer>
        <Mydiary className="logo"></Mydiary>
      </HomeNavContainer>
      <main>
        <HomeCalendar>
          <CalendarWrapper>
            <DefaultCalendar
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev",
                center: "title",
                right: "next",
              }}
              events={eventList.length !== 0 ? eventList : HOME_DEFAULT_EVENT}
              titleFormat={{
                year: "numeric",
                month: "long",
              }}
              editable={true}
              dayMaxEvents={true}
            />
          </CalendarWrapper>
        </HomeCalendar>
        <RightSideContainer>
          <MemosContianer>
            <h2>Memo</h2>
            <MemosWrapper>
              {memoCards.map((memoList) => {
                return (
                  <MemoCard
                    key={memoList._id}
                    memoInfo={memoList}
                    disabled={true}
                  />
                );
              })}
            </MemosWrapper>
          </MemosContianer>
          <NavNLoginContainer>
            <NavContainer>
              <h2>Navigation</h2>
              <NavLink to="/calendar">
                <Calendar3 />
                Calendar
              </NavLink>
              <NavLink to="/memo">
                <Journals />
                Memo
              </NavLink>
            </NavContainer>
            <LoginContainer>
              {user ? (
                <div>
                  <h2>{`Hello~ ${user.displayName}`}</h2>
                  <button onClick={logoutHandler}>Log out</button>
                </div>
              ) : (
                <SignInForm />
              )}
            </LoginContainer>
          </NavNLoginContainer>
        </RightSideContainer>
      </main>
    </HomeContainer>
  );
}

export default Home;
