import { actions } from "./Actions";

export const authReducer = ( state, action ) => {

    switch ( action.type ) {
        case actions.login:
            return {
                logged: true,
                user: action.payload,
            };
        case actions.logout:
            return {
                logged: false,
                user: null,
            };
        default:
            return state;
    };

};
