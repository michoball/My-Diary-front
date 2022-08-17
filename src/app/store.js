import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../features/calendar/calendarSlice";
import customLabelReducer from "../features/customLabel/customLabelSlice";
import memoReducer from "../features/memo/memoSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    customLabel: customLabelReducer,
    memo: memoReducer,
    user: userReducer,
  },
});
