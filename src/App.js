import EditorForm from "./page/editor/EditorForm";
import Calendar from "./page/calendar/Calendar.page";
import Home from "./page/home/Home.page";
import Navigation from "./page/navigation/Navigation.page";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global.styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/memo" element={<EditorForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
