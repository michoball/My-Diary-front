import Calendar from "./page/calendar/Calendar.page";
import Home from "./page/home/Home.page";
import Navigation from "./page/navigation/Navigation.page";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import Memo from "./page/memo/Memo.page";
import Editor from "./page/editor/Editor.page";
import Authentication from "./page/authentication/Authentication";
import OauthLogin from "./component/auth/oauthLogin/OauthLogin";
import PrivateRoute from "./component/privateRoute/PriivateRoute";
import LandingPage from "./page/landing/LandingPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/oauth/success" element={<OauthLogin />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Navigation />}>
          <Route path="/login" element={<Authentication />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/memo/editor" element={<Editor />}>
              <Route path="/memo/editor/:editmemoId" element={<Editor />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
