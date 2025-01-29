import './Article.css'

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom"

import posts from 'json/posts.json'
import ModelArticle from "components/ModelArticle"


const Article = () => {
    const params = useParams()

    const post = posts.find(p => p.id === Number(params.id))

    if(!post) {
        return <h1>Artigo não encontrado</h1>
    }

    return (
        <ModelArticle 
            coverImage={`/posts/${post.id}/banner.png`}
            title={post.title}
        >
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </ModelArticle>
    )
}

export default Article