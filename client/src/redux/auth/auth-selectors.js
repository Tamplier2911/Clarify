import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectAuthObject = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectAuthError = createSelector(
  [selectUser],
  user => user.errorMessage
);
