import {USER_ACTIONS} from "../constant";

export const getUser = () => {
    return {type: USER_ACTIONS.GET_USER};
};

export const updateUser = (data) => {
    return {type: USER_ACTIONS.UPDATE_USER, payload: data};
};

export const registerUser = (data) => {
    return {type: USER_ACTIONS.REGISTER_USER, payload: data};
};