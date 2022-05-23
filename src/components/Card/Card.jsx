import { createUrl } from "../../apiConfig";
import styles from "./Card.module.css";


function Card({title, path}) {
    return (
    <div className={styles.card} style={{backgroundImage:`url(${createUrl.img(path, "posterMedium")})`}}>
        <p className={styles.card_title}>{title}</p>
    </div>
);
}

export default Card;