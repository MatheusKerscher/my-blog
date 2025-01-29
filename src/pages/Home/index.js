import styles from './Home.module.css'

import posts from 'json/posts.json'
import CardPost from 'components/CardPost'

const Home = () => {
    return (
        <ul className={styles.posts} >
            {posts.map(p => (
                <li key={p.id}>
                    <CardPost post={p} />
                </li>
            ))}
        </ul>
    )
}

export default Home