import { createSelector } from "reselect";

const selectCalendarReducer = (state) => state.calendar;

export const selectCalendarEvents = createSelector(
  [selectCalendarReducer],
  (calendarEventsSlice) => {
    return calendarEventsSlice.eventList;
  }
);

// export const selectEditEvent = createSelector(
//   [selectCalendarEvents],
//   (EditEvent) => {
//     return EditEvent.find;
//   }
// );
