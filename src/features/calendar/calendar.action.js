export const calendarAction = {
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
    console.log(action.payload);
    state.eventList = state.eventList.map((event) =>
      event.id === action.payload.id ? { ...event, ...action.payload } : event
    );
  },
  // selectEvent: (state, action) => {
  //   const findEvent = state.eventList.find(
  //     (event) => event.id === action.payload.id
  //   );

  //   state.selectedEvent = findEvent;
  // },
};
