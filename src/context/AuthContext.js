import { createContext, useReducer }  from "react";
import  AuthReducer  from "./AuthReducer.js"

const INITIAL_STATE = {
    user:{ 
        _id : "636aa159848211da857f431b",
    username: "BeefSupreme",
    password: "$2b$10$I3/41QFd5BItiZFP8yqJsuoHIk8jGfrqv/uQPTCH72g604NtQQoMC",
    profilePic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ac35cd3-1d7…",
    },
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AuthReducer, INITIAL_STATE);
    return(
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch,
            }} >
                {children}
        </AuthContext.Provider>
    )
}