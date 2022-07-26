import { createSlice } from "@reduxjs/toolkit";
import { customLabelAction } from "./customLabel.action";

const initialLabels = [
  {
    id: "123",
    groupId: "Job",
    allDay: true,
    color: "#4caf50",
  },
  {
    id: "1215gq4raf",
    groupId: "Default",
    allDay: false,
    color: "#2196f3",
  },
  {
    id: "12",
    color: "#f44336",
    groupId: "regular Work",
    daysOfWeek: ["0"],
  },

  {
    groupId: "family event",
    id: "afea4",
    color: "#2196f3",
  },
  {
    id: "133584fasefa-arnla",
    title: "event 2",
    groupId: "forbidden",
    color: "#ff9f89",
    overlap: false,
    display: "background",
    allDay: true,
  },
];

const initialState = {
  LabelList: initialLabels,
  loading: false,
  error: null,
};

export const customLabelSlice = createSlice({
  name: "customLabel",
  initialState,
  reducers: customLabelAction,
  extraReducers: (builder) => {},
});

export const customLabelActions = customLabelSlice.actions;

export default customLabelSlice.reducer;
