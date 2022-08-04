export const calendarAction = {
  addEvent: (state, action) => {
    const exitingEvent = state.eventList.find(
      (event) => event.id === action.payload.id
    );
    if (exitingEvent) {
      return {
        ...state,
        eventList: state.eventList.map((event) =>
          event.id === action.payload.id ? { event, ...action.payload } : event
        ),
      };
    }
    return {
      ...state,
      eventList: state.eventList.concat({ ...action.payload }),
    };
  },
  removeEvent: (state, action) => {
    return {
      ...state,
      eventList: state.eventList.filter((event) => {
        return event.id !== action.payload.id;
      }),
    };
  },
  selectEvent: (state, action) => {
    console.log(action.payload);
    const findEvent = state.eventList.find(
      (event) => event.id === action.payload.id
    );
    return {
      ...state,
      selectedEvent: findEvent,
    };
  },
  clearSelectEvent: (state) => {
    return {
      ...state,
      selectedLabel: null,
    };
  },
};
