import { createSlice } from "@reduxjs/toolkit";
import {
  createCalendar,
  deleteCalendar,
  updateCalendar,
  getCalendars,
} from "./calendar.thunk";

const initialEvent = [
  //종일 이벤트
  {
    labelId: "12afaef3",
    labelTitle: "Job",
    id: "123",
    title: "가족여행",
    allDay: true,
    start: "2022-08-05T00:00:00",
    end: "2022-08-06T24:00:00",
    color: "#4caf50",
  },

  // 시간별 단기 일정
  {
    labelTitle: "family event",
    labelId: "afea4",
    id: "afea4q4t4g",
    title: "가족모임",
    allDay: false,

    start: "2022-08-16T14:00",
    end: "2022-08-16T20:00",
    color: "#2196f3",
  },
  //배경 이벤트
  {
    labelId: "",
    id: "133584fasefa-arnla",
    title: "휴일",
    start: "2022-08-26T00:00",
    end: "2022-08-26T24:00",
    color: "#ff9f89",
    allDay: true,

    // 배경 만의 부분
    overlap: false,
    display: "background",
  },
  {
    labelId: "",
    id: "133584fasefa-arnla",
    title: "휴일",
    start: "2022-08-27T00:00",
    end: "2022-08-27T24:00",
    color: "#ff9f89",
    allDay: true,

    // 배경 만의 부분
    overlap: false,
    display: "background",
  },
  // 정기 일정 포맷 object
  {
    id: "12",
    title: "농구 모임",
    color: "#f44336",
    labelId: "1hwhw2",
    labelTitle: "regular Work",
    start: "2022-08-26T00:00",
    end: "2022-08-28T00:00",
    allDay: true,

    // 정기 만의 부분
    daysOfWeek: ["0"],
    startRecur: "2022-07-01",
    endRecur: "2022-09-30",
  },
  {
    id: "12abbag64",
    title: "코테 준비",
    labelTitle: "blueEvents",
    color: "#ff9f89",

    daysOfWeek: ["4"],
    startTime: "10:45",
    endTime: "12:45",
    startRecur: "2022-08-01",
    endRecur: "2022-08-25T24:00",
  },
];

const initialState = {
  eventList: initialEvent,
  selectedEvent: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    selectEvent: (state, action) => {
      const exitingEvent = state.eventList.find(
        (event) => event._id === action.payload
      );
      return {
        ...state,
        selectedEvent: exitingEvent,
      };
    },
    clearSelectEvent: (state) => {
      return {
        ...state,
        selectedEvent: null,
      };
    },
    calendarReset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCalendar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.eventList = state.eventList.concat(action.payload);
      })
      .addCase(createCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCalendars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCalendars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.eventList = state.eventList.concat(action.payload);
      })
      .addCase(getCalendars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCalendar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.eventList = state.eventList.filter(
          (calendar) => calendar._id !== action.payload
        );
      })
      .addCase(deleteCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateCalendar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCalendar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.eventList = state.eventList.map((calendar) =>
          calendar._id === action.payload._id
            ? { ...calendar, ...action.payload }
            : calendar
        );
      })
      .addCase(updateCalendar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { selectEvent, clearSelectEvent, calendarReset } =
  calendarSlice.actions;

export default calendarSlice.reducer;
