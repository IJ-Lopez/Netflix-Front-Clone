import { useContext, useEffect, useState } from "react";
import { services } from "../apiConfig";
import { AppContext } from "../App";
import useGetData from "../hooks/useGetData";
import { authType } from "../reducers/authReducer";

function LandingPage(){
    const {authState, authDispatcher} = useContext(AppContext);

    const [loading , data, error] = useGetData(services.tryGetTopRatedMovies, 1);

    return (
    <>
        <button onClick={() => console.log(data)}>CLG DATA</button>
        <button onClick={() => authDispatcher({type:authType.LOGOUT})}>LOGOUT</button>
        <p>Boenas</p>
    </>
    );
}

export default LandingPage;