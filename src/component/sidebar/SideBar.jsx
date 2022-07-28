import {
  SidebarContainer,
  CalendarBox,
  ListViewBox,
  SideBarWrapper,
} from "./SideBar.styles";

import CategoryView from "../categoryView/CategoryView";
import SidebarCalendar from "../calendars/sidebar/SidebarCalendar";

function SideBar() {
  return (
    <SideBarWrapper>
      <SidebarContainer>
        <CalendarBox>
          <SidebarCalendar />
        </CalendarBox>
        <ListViewBox>
          <CategoryView />
        </ListViewBox>
      </SidebarContainer>
    </SideBarWrapper>
  );
}

export default SideBar;
