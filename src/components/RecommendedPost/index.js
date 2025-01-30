import styles from './RecommendedPost.module.css'

import CardPost from 'components/CardPost'

const RecommendedPost = ({ recommendedPostList }) => {
    return (
      <div>
        <h2 className={styles['recommended-post-title']}>
            Outros posts que você pode gostar:
        </h2>

        <ul className={styles.posts} >
            {recommendedPostList.map(p => (
                <li key={p.id}>
                    <CardPost post={p} />
                </li>
            ))}
        </ul>
      </div>  
    )
}

export default RecommendedPost