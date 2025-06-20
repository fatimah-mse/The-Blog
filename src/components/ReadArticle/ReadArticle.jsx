import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function ReadArticle() {

    const {id} = useParams()

    const articles = useSelector((state) => state.articles)

    const filteredArticles = articles.filter(article => article.id === parseInt(id))
    const displayedArticles = filteredArticles.slice(0,1)

    console.log(displayedArticles)

    return (
        <div className='dark:bg-dark-mood'>
            <p className='text-sm font-semibold font-inter text- mb-8 text-purple'>{displayedArticles[0].date}</p>
            <h2 className='text-4xl font-bold font-inter text-primary mb-8 dark:text-white'>{displayedArticles[0].title}</h2>
            <img className='w-full h-26 mb-8' src={displayedArticles[0].url} alt="blog-image" />
            <p className='text-base text-secondary font-inter font-normal mb-3'>{displayedArticles[0].desc}</p>
            <p className='text-base text-secondary font-inter font-normal mb-3 '>{displayedArticles[0].def}</p>
            <p className='text-base text-secondary font-inter font-bold mb-3 text-center w-9/12 mx-auto '>{displayedArticles[0].details[0].desc}</p>
            {displayedArticles[0].details.map(e => {
                return (
                    <>
                        <img className='w-full max-h-26 mb-3' src={e.url} alt="detail-image" />
                        <p className='text-base text-secondary font-inter font-normal mb-3 text-center w-9/12 mx-auto '>{e.desc}</p>
                        <h4 className='text-lg text-secondary font-inter font-bold mb-3 '>{e.title}</h4>
                        <p className='text-base text-secondary font-inter font-normal mb-3 '>{e.txt}</p>
                    </>
                )
            })}
            {displayedArticles[0].btns.map(e => {
                return (
                    <button className={`rounded-2xl ${e.class} mt-6 px-2.5 me-2`}>{e.txt}</button>
                )
            })}

        </div>
    )
}
