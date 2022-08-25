import { createSlice } from "@reduxjs/toolkit";
import {
  createLabel,
  getLabels,
  deleteLabel,
  updateLabel,
} from "./label.thunk";

const initialLabels = [
  {
    labelId: "1215gq4raf",
    labelTitle: "Defalut",
    allDay: false,
    color: "#ffeb3b",
  },
  {
    labelId: "12afaef3",
    labelTitle: "Job",
    allDay: true,
    color: "#4caf50",
  },
  {
    labelId: "1hwhw2",
    color: "#f44336",
    labelTitle: "regular Work",
    daysOfWeek: ["0"],
    allDay: true,
  },

  {
    labelTitle: "family event",
    labelId: "afea4",
    daysOfWeek: undefined,
    color: "#2196f3",
    allDay: false,
  },
];

const initialState = {
  labelLists: [],
  selectedLabel: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {
    labelReset: (state) => initialState,
    clearSelectLabel: (state) => {
      return {
        ...state,
        selectedLabel: null,
      };
    },
    selectLabel: (state, action) => {
      const existingLabel = state.labelLists.find(
        (label) => label._id === action.payload
      );
      console.log(existingLabel._id);
      return {
        ...state,
        selectedLabel: existingLabel,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLabel.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createLabel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLabels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLabels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.labelLists = action.payload;
      })
      .addCase(getLabels.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLabel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.labelLists = state.labelLists.filter(
          (label) => label._id !== action.payload
        );
      })
      .addCase(deleteLabel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLabel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.labelLists = state.labelLists.map((label) =>
          label._id === action.payload._id
            ? { ...label, ...action.payload }
            : label
        );
      })
      .addCase(updateLabel.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { clearSelectLabel, selectLabel, labelReset } = labelSlice.actions;

export default labelSlice.reducer;
