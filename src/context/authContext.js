import {createContext, useReducer} from "react"
import AuthReducer from "./authReducer";

const initialState = {
    user: {
        _id: "64021589311763cb226a94cc",
        username: "Jane",
        email: "jane@gmail.com",
        profilePicture: "person/4.jpeg",
        coverPicture: "",
        followers: [],
        following: [],
        isAdmin: false,
        city: "Atlanta",
        desc: "fun loving gal",
        from: "New York"
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}