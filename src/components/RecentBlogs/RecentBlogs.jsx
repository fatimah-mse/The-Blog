import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { useSelector } from 'react-redux'
import CardComponent from '../CardComponent/CardComponent'

export default function RecentBlogs() {
    const articles = useSelector((state) => state.articles)
    const latestFourArticles = articles.slice(-4)

    return (
        <section className='bg-white px-28 max-[834px]:px-5 pt-12.5 dark:bg-dark-mood'>
            <TitleComponent title={'Recent blog posts'} />
            <div className='columns-2 max-[834px]:columns-1 py-8'>
                {/* ====NOTE==== I have to make it array and map */}
                <CardComponent 
                            href={`/blog/${latestFourArticles[0].id}`}
                            date={latestFourArticles[0].date}
                            image={latestFourArticles[0].url}
                            title={latestFourArticles[0].title}
                            desc={latestFourArticles[0].desc}
                            btnData={latestFourArticles[0].btns}
                            imgP= {'mb-8'}
                />
                <CardComponent 
                            href={`/blog/${latestFourArticles[1].id}`}
                            date={latestFourArticles[1].date}
                            image={latestFourArticles[1].url}
                            title={latestFourArticles[1].title}
                            desc={latestFourArticles[1].desc}
                            btnData={latestFourArticles[1].btns}
                            flex={'sm:flex'}
                            imgP= {'sm:me-6 max-[576px]:mb-8'}
                />
                <CardComponent 
                            href={`/blog/${latestFourArticles[2].id}`}
                            date={latestFourArticles[2].date}
                            image={latestFourArticles[2].url}
                            title={latestFourArticles[2].title}
                            desc={latestFourArticles[2].desc}
                            btnData={latestFourArticles[2].btns}
                            flex={'sm:flex'}
                            imgP= {'sm:me-6 max-[576px]:mb-8'}
                />
            </div>
            <CardComponent 
                        href={`/blog/${latestFourArticles[3].id}`}
                        date={latestFourArticles[3].date}
                        image={latestFourArticles[3].url}
                        title={latestFourArticles[3].title}
                        desc={latestFourArticles[3].desc}
                        btnData={latestFourArticles[3].btns}
                        flex={'min-[834px]:flex'}
                        imgP= {'sm:me-6 max-[834px]:mb-8'}
            />
        </section>
    )
}
