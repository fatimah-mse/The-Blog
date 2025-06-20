import React from 'react'
import Suggestions from '../components/Suggestions/Suggestions'
import ReadArticle from '../components/ReadArticle/ReadArticle'
import Subscribe from '../components/Subscribe/Subscribe'

export default function Blog() {

    return (
        <>
            <section className='bg-white px-[9rem] max-[834px]:px-5 pt-28 dark:bg-dark-mood'>
                <div className='grid grid-cols-3 max-[834px]:grid-cols-2 max-[576px]:flex max-[576px]:flex-col-reverse  gap-8'>
                    <div><Suggestions /></div>
                    <div className="min-[834px]:col-span-2">
                        <ReadArticle />
                        <Subscribe myClass={'hidden lg:block'} />
                    </div>
                </div>
                <Subscribe myClass={'block lg:hidden'} />
            </section>
        </>
    )
}
