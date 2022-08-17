import { createSlice } from "@reduxjs/toolkit";
import { customLabelAction } from "./customLabel.action";

const initialLabels = [
  {
    labelId: "1215gq4raf",
    groupTitle: "Defalut",
    allDay: false,
    color: "#ffeb3b",
  },
  {
    labelId: "12afaef3",
    groupTitle: "Job",
    allDay: true,
    color: "#4caf50",
  },
  {
    labelId: "1hwhw2",
    color: "#f44336",
    groupTitle: "regular Work",
    daysOfWeek: ["0"],
    allDay: true,
  },

  {
    groupTitle: "family event",
    labelId: "afea4",
    daysOfWeek: null,
    color: "#2196f3",
    allDay: false,
  },
];

const initialState = {
  labelLists: initialLabels,
  selectedLabel: null,
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
