export const reducerAction = {
  addEvent: (state, action) => {
    state.eventList = state.eventList.concat({ ...action.payload });
  },
  removeEvent: (state, action) => {
    state.eventList = state.eventList.filter((event) => {
      return event.id !== action.payload.id;
    });
  },
  editEvent: (state, action) => {
    // const exitingEvent = state.eventList.find(
    //   (event) => event.id === action.payload.id
    // );
    state.eventList = state.eventList.map((event) =>
      event.id === action.payload.id ? { ...event, ...action.payload } : event
    );
  },
};
