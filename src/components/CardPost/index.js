import { Link } from "react-router-dom";
import styles from "./CardPost.module.css";
import PrimaryButton from "components/PrimaryButton";

const CardPost = ({ post }) => {
    return (
        <Link to={`/articles/${post.id}`}>
            <div className={styles.post}>
                <img src={`/posts/${post.id}/banner.png`} className={styles.banner} alt="Banner do artigo" />

                <h2 className={styles.title}>
                    {post.title}
                </h2>

                <PrimaryButton>
                    Ler
                </PrimaryButton>
            </div>
        </Link>
    );
};

export default CardPost;
