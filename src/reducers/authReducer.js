import { useReducer } from "react";

export const authType = {
    LOGIN : "login[auth]",
    LOGOUT: "logout[auth]"
};

export const authReducer = (state, action) => {
    switch(action.type){
        case authType.LOGIN:
            if(action.payload.username === "admin" && action.payload.password === "admin"){
                return {
                    ...state,
                    error: null,
                    isAuth: true
                };
            } else {
                return {
                    ...state,
                    error: "Usuario o Contraseña inválidos",
                    isAuth: false
                }
            }
        case authType.LOGOUT:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    };
};

export const authInitialState = {
    error:null,
    isAuth:false
};
