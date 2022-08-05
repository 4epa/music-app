const AUTHORIZATION = 'AUTHORIZATION';
const LOGOUT = 'LOGOUT';

const authorization = (userId, login) => {
  
  return {
    type: AUTHORIZATION,
    myId: userId,
    myLogin: login,
  }
}

const logoutAction = () => ({type: LOGOUT})

const initialState = {
  auth: false,
  myProfile: null,
  auth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}

export default authReducer;