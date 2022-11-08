const selectAuthorizationStatus = (state) => {
  return state.authorization.authorizationStatus
}

const selectUserProfile = (state) => {
  return state.authorization.profile
}

export { selectAuthorizationStatus, selectUserProfile }