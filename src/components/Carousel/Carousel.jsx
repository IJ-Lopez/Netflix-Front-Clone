import { services } from "../../apiConfig";
import useGetData from "../../hooks/useGetData";
import Card from "../Card/Card";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

function Carousel({service, title = "loremipsum"}) {

    const [loading , data, error] = useGetData(service, 1);

    const movies = () => {
        return 
    }

    const settings = {
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 6
    };

    return (
    
    <div>
        {loading && <p>LOADING</p>}
        {error && <p>Algo salio para el orto</p>}
        {data &&
        <div>
            <p className={styles.carousel_title}>{title}</p>
            <Slider {...settings}>
            {data.results.map((e) => 
                <Card key={e.id} title={e.title} path={e.backdrop_path}></Card>    
            )}
            </Slider>
        </div>
        }
        
    </div>

    );
}

export default Carousel;