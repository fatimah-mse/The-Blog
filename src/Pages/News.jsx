import React from 'react'
import Subscribe from '../components/Subscribe/Subscribe'
import { useSelector } from 'react-redux'
import TitleComponent from '../components/TitleComponent/TitleComponent'
import CardComponent from '../components/CardComponent/CardComponent'

export default function News() {

    const articles = useSelector((state) => state.articles)

    const displayedArticles = articles.slice(0, 3)

    console.log(displayedArticles)

    return (
        <>
            <Subscribe myClass={'bg-white dark:bg-dark-mood px-[9rem] max-[834px]:px-5 pt-28'} />
            <div>
                <div className='px-[9rem] max-[834px]:px-5 dark:bg-dark-mood '>
                    <TitleComponent title={'All blog posts'} />
                    <div className='pt-8 grid grid-cols-3 max-[834px]:grid-cols-2 max-[576px]:flex max-[576px]:flex-col-reverse gap-8'>
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
                                flex={'w-full'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
