import './Article.css'

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom"

import posts from 'json/posts.json'
import ModelArticle from "components/ModelArticle"
import DefaultPage from 'pages/DefaultPage';
import NotFound from 'pages/NotFound';
import RecommendedPost from 'components/RecommendedPost';


const Article = () => {
    const params = useParams()
    const currentPostId = Number(params.id || 0)

    const post = posts.find(p => p.id === currentPostId)

    const recommendedPostList = posts
        .filter(p => p.id !== currentPostId)
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    if(!post) {
        return <NotFound />
    }

    return (
        <DefaultPage>
            <ModelArticle 
                coverImage={`/posts/${post.id}/banner.png`}
                title={post.title}
                >
                <div className='post-markdown-container'>
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                </div>

                <RecommendedPost 
                    recommendedPostList={recommendedPostList}
                />
            </ModelArticle>

        </DefaultPage>
    )
}

export default Article