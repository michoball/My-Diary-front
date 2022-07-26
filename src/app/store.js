import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../features/calendar/calendarSlice";
import customLabelReducer from "../features/customLabel/customLabelSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    customLabel: customLabelReducer,
  },
});
