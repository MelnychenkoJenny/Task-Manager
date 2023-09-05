export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.getIsFetchAnswer;
export const selectIsToken = state => state.auth.token;
export const selectNeedHelpMessage = state => state.auth.needHelpMessage;
