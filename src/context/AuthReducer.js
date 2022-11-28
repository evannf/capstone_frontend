const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_ATTEMPT":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.response,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILED":
            return {
                user: null,
                isFetching: false,
                error: action.response
            }
            default:
      return state;
        }
}

export default AuthReducer;