import { CategoryViewContainer, ListContainer } from "./CategoryView.styles";
import CategoryList from "../categoryList/CategoryList";

export const CategoryView = () => {
  const eventList = [
    //종일 이벤트
    {
      id: "123",
      title: "I am available",
      groupId: "Job",
      allDay: true,
      start: "2022-07-05T00:00:00",
      end: "2022-07-06T24:00:00",
      color: "green",
    },

    {
      id: "12",
      title: "Go to market",
      color: "red",
      groupId: "regular Work",
      daysOfWeek: ["0"],
      startRecur: "2022-07-01",
      endRecur: "2022-07-30",
    },
    // 시간별 단기 일정
    {
      groupId: "family event",
      id: "afea4",
      title: "event 2",
      start: "2022-07-02T14:00",
      end: "2022-07-02T20:00",
      color: "#2196f3",
    },
    //배경 이벤트
    {
      id: "133584fasefa-arnla",
      title: "event 2",
      groupId: "forbidden",
      start: "2022-07-26T00:00",
      end: "2022-07-28T00:00",
      color: "#ff9f89",
      overlap: false,
      display: "background",
      allDay: true,
    },
  ];
  return (
    <CategoryViewContainer>
      <h2>
        <span>Categories</span>
      </h2>
      <ListContainer>
        {eventList.map((lists) => {
          return <CategoryList key={lists.id} lists={lists} />;
        })}
      </ListContainer>
    </CategoryViewContainer>
  );
};
