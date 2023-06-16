import { useReducer } from "react";
import { actions } from "./Actions";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { fetchApiLogin } from "../functions/fetchApi";

interface Props {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {

    const init = () => {
        const user = JSON.parse( localStorage.getItem('user') );
        return {
            logged: !!user,
            user: user,
        };
    };

    const [authState, dispatch] = useReducer( authReducer, {}, init );

    const login = async ( name = '', email = '' ) => {
        const token = await fetchApiLogin('/login', { "email": "aldrosposirah@gmail.com", "password": "0000" });
        const user = {
            name: name,
            email: email,
            token: token.token
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