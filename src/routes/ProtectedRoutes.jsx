import { useContext } from "react";
import Login from "../pages/Login"
import {AppContext} from "../App";


function ProtectedRoutes({children}){

    const {authState, authDispatcher} = useContext(AppContext);

    if(authState.isAuth){
        return children
    } else {
        return <Login/>;
    }

}

export default ProtectedRoutes;