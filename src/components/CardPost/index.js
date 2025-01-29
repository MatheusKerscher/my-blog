import { Link } from "react-router-dom";
import styles from "./CardPost.module.css";

const CardPost = ({ post }) => {
    return (
        <Link to={`/articles/${post.id}`}>
            <div className={styles.post}>
                <img src={`/posts/${post.id}/banner.png`} className={styles.banner} alt="Banner do artigo" />

                <h2 className={styles.title}>
                    {post.title}
                </h2>

                <button className={styles['read-button']}>
                    Ler
                </button>
            </div>
        </Link>
    );
};

export default CardPost;
