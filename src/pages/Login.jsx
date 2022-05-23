import { useContext, useEffect, useReducer, useState } from "react";
import { AppContext } from "../App";
import { authType } from "../reducers/authReducer";
import useForm from "../hooks/useForm";
import { services } from "../apiConfig";
import useGetData from "../hooks/useGetData";

function Login(){
    
    const {authState, authDispatcher} = useContext(AppContext);

    const [formState, handleChange, handleSubmit] = useForm(
        {
        username: "",
        password: ""
        },
        () => authDispatcher({type:authType.LOGIN, payload: formState})
    );

    const [passwordType, setPasswordType] = useState("password");

    const changePasswordType = () => {
        if(passwordType === "password"){
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    };

    const eyeImage = {
        open: "https://cdn-icons-png.flaticon.com/512/18/18484.png",
        closed: "https://icon-library.com/images/closed-eye-icon/closed-eye-icon-18.jpg"
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="Nombre de Usuario" onChange={handleChange}/>
            <br />

            <div style={{display:"flex", maxHeight:21}}>
                <input name="password" type={passwordType} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" onChange={handleChange}/>
                <img src={passwordType === "password" ? eyeImage.closed : eyeImage.open} alt="eye" style={{maxWidth:24, marginLeft:5, cursor: "pointer"}} onClick={changePasswordType}/>
            </div>
            
            <input type="submit" value="SUBMIT"/>  

            {authState.error && <p>{authState.error}</p>}
            <br />
        </form>
    );
}

export default Login;