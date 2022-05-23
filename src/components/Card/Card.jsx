import { createUrl } from "../../apiConfig";
import styles from "./Card.module.css";


function Card({title, path}) {
    const loadingPng = "https://www.sunrisemovement.org/es/wp-content/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg";
    return (
    <div className={styles.card} style={{backgroundImage:`url(${path ? createUrl.img(path, "posterMedium") : loadingPng})`}}>
        <p className={styles.card_title}>{title}</p>
    </div>
);
}

export default Card;