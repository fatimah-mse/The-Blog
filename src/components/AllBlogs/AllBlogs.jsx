import React, { useState } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import { useSelector } from 'react-redux'
import CardComponent from '../CardComponent/CardComponent'

export default function AllBlogs() {
    const articles = useSelector((state) => state.articles)

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <section className='bg-white px-28 max-[834px]:px-5 pt-12.5 dark:bg-dark-mood'>
            <TitleComponent title={'All blog posts'} />
            <div className='grid grid-cols-3 max-[834px]:grid-cols-2 max-[576px]:grid-cols-1 gap-8 py-8 border-b-2'>
                {currentPosts.map((article, index) => (
                    <CardComponent 
                        key={index}
                        href={`/blog/${article.id}`}
                        date={article.date}
                        image={article.url}
                        title={article.title}
                        desc={article.desc}
                        btnData={article.btns}
                        imgP= {'mb-8'}
                    />
                ))}
            </div>
            <div className="flex justify-center py-8">
                {[...Array(Math.ceil(articles.length / postsPerPage))].map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => paginate(i + 1)} 
                        className={`mr-2 px-4 py-2  text-primary rounded-lg ${currentPage === i + 1 ? 'bg-off-white dark:text-primary ' : 'dark:text-white'}`}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </section>
    )
}
