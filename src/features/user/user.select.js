import { createSelector } from "reselect";

export const selectUserReducer = (state) => state.user;

export const selectMemoLists = createSelector(
  [selectUserReducer],
  (selectUserSlice) => {
    return selectUserSlice.user;
  }
);
