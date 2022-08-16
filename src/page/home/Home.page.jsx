import { useEffect, useState } from "react";
import { DefaultCalendar } from "../../utill/calendar/Calendar.config";
import { useSelector } from "react-redux";
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

function Home() {
  const eventList = useSelector(selectCalendarEvents);
  const memoLists = useSelector(selectRecentOrderMemoLists);
  const [memoCards, setMemoCards] = useState(HOME_DEFAULT_MEMO);

  useEffect(() => {
    if (memoLists) {
      setMemoCards(memoLists.slice(0, 7));
    }
  }, []);

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
              events={eventList ? eventList : HOME_DEFAULT_EVENT}
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
                    key={memoList.id}
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
              <SignInForm />
            </LoginContainer>
          </NavNLoginContainer>
        </RightSideContainer>
      </main>
    </HomeContainer>
  );
}

export default Home;
