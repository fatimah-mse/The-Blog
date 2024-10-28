import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import CardComponent from '../CardComponent/CardComponent'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Suggestions() {

    const {id} = useParams()

    const articles = useSelector((state) => state.articles)

    const filteredArticles = articles.filter(article => article.id !== parseInt(id))

    const displayedArticles = filteredArticles.slice(0, 9)

    return (
        <>
            <TitleComponent title={'Recent blog posts'} />
            <div className='mt-8'>
                {displayedArticles.map((article, index) => (
                    <CardComponent
                        key={index}
                        href={`/blog/${article.id}`}
                        date={article.date}
                        image={article.url}
                        title={article.title}
                        desc={article.desc}
                        btnData={article.btns}
                        imgP={'mb-8'}
                    />
                ))}
            </div>
        </>
    )
}

