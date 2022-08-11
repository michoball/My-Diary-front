const findEvent = (events, id) => {
  return events.find((event) => event.id === id);
};

export const calendarAction = {
  addEvent: (state, action) => {
    const exitingEvent = findEvent(state.eventList, action.payload.id);
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
    const exitingEvent = findEvent(state.eventList, action.payload.id);
    return {
      ...state,
      selectedEvent: exitingEvent,
    };
  },
  clearSelectEvent: (state) => {
    return {
      ...state,
      selectedLabel: null,
    };
  },
};
