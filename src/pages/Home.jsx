import { useContext, useEffect, useState } from "react";
import { createUrl, services } from "../apiConfig";
import { AppContext } from "../App";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Separator from "../components/Separator/Separator";
import useGetData from "../hooks/useGetData";
import { authType } from "../reducers/authReducer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home(){
    const {authDispatcher} = useContext(AppContext);

    const [loading , data, error] = useGetData(services.tryGetTopRatedMovies, 1);

    return (
    <div>  
        <Header/>
        <Banner/>

        <div style={{paddingLeft:'40px', paddingRight: '40px'}}>
            <Separator height={'40px'}/>
            <Carousel 
                service={services.tryGetTopRatedMovies}
                title={"Peliculas aclamadas por la crítica"}
            />
            <Separator height={'40px'}/>
            <button onClick={() => console.log(data)}>CLG DATA</button>
            <button onClick={() => authDispatcher({type:authType.LOGOUT})}>LOGOUT</button>
        </div>
    </div>
    );
}

export default Home;