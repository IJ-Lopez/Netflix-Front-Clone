import { createUrl } from "../../apiConfig";
import styles from "./Banner.module.css";

function Banner() {
    return (
        <div className={styles.banner_container} style={{backgroundImage: `url(${createUrl.img("/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg", "backdropLarge")})`, }}>
            <p>TITLE</p>
        </div>
    );
}

export default Banner;