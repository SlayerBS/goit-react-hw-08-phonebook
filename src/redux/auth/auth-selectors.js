export const getIsAuthenticated = (state) => state.auth.isAuthenticated;

export const getUsername = (state) => state.auth.user.name;
export const getError = (state) => state.auth.error;
