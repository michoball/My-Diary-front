import { createSlice } from "@reduxjs/toolkit";
import { calendarAction } from "./calendar.action";
const initialEvent = [
  //종일 이벤트
  {
    id: "123",
    title: "I am available",
    allDay: true,
    start: "2022-07-05T00:00:00",
    end: "2022-07-06T24:00:00",
    color: "#4caf50",
  },

  // 시간별 단기 일정
  {
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
    start: "2022-07-26T00:00",
    end: "2022-07-28T00:00",
    color: "#ff9f89",
    // 배경 만의 부분
    overlap: false,
    display: "background",
    allDay: true,
  },
  // 정기 일정 포맷 object
  {
    id: "12",
    title: "Go to market",
    color: "#f44336",
    groupId: "131afase",
    allDay: true,

    // 정기 만의 부분
    daysOfWeek: ["0"],
    startRecur: "2022-07-01",
    endRecur: "2022-07-30",
  },
  {
    id: "12abbag64",
    title: "Go",
    groupId: "blueEvents",
    allDay: false,

    daysOfWeek: ["4"],
    startTime: "10:45:00",
    endTime: "12:45:00",
    startRecur: "2022-07-01",
    endRecur: "2022-07-30",
  },
];

const initialState = {
  eventList: [...initialEvent],
  loading: false,
  error: null,
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: calendarAction,
  extraReducers: (builder) => {},
});

export const calendarActions = calendarSlice.actions;

export default calendarSlice.reducer;
