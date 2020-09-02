import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {USER_ACTIONS} from "../constant";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_ACTIONS.GET_USER:
            return state;
        case USER_ACTIONS.REGISTER_USER:
            return {...action.payload};
        case USER_ACTIONS.UPDATE_USER:
            return {...state.user, ...action.payload};
        default:
            return state;
    }
};


export default combineReducers(
    {
        form: formReducer,
        user: userReducer
    }
);