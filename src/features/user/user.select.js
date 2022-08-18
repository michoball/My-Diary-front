import { createSelector } from "reselect";

export const selectUserReducer = (state) => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (selectUserSlice) => {
    return selectUserSlice.user;
  }
);
