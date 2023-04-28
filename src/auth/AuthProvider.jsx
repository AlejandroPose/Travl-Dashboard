import { useReducer } from "react";
import { actions } from "./Actions";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

export const AuthProvider = ({ children }) => {

    const init = () => {
        const user = JSON.parse( localStorage.getItem('user') );
        return {
            logged: !!user,
            user: user,
        };
    };

    const [authState, dispatch] = useReducer( authReducer, {}, init );

    const login = ( name = '', email = '' ) => {
        const user = {
            name: name,
            email: email,
        };
        const action = {
            type: actions.login,
            payload: user,
        };
        localStorage.setItem( 'user', JSON.stringify( user ) );
        dispatch( action );
    };

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: actions.logout,
        };
        dispatch( action );
    };

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    );

};