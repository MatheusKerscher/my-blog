import styles from "./ModelArticle.module.css";

const ModelArticle = ({ children, coverImage, title }) => {
    return (
        <article className={styles['model-article-container']}>
            <div
                className={styles['cover-image']}
                style={{ backgroundImage: `url(${coverImage})` }}
            />

            <h2 className={styles.title}>{title}</h2>

            <div className={styles["article-content-container"]}>
                {children}
            </div>
        </article>
    );
};

export default ModelArticle;
