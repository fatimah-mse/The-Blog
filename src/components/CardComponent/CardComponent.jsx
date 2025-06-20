import React from 'react'
import arrow from '../../images/arrows/arrow-up-right-black.png'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Link } from 'react-router-dom'

export default function CardComponent({flex , imgP , image , date , title , desc , href , btnData}) {
    return (
        <div className={`${flex} pb-8 dark:text-white dark:bg-dark-mood`}>
            <img className={`${imgP} w-full object-contain`} src={image} alt="blog-image" />
            <div>
                <p className='text-sm font-semibold font-inter text-purple mb-3'>{date}</p>
                <Link to={href} className='flex justify-between mb-3'>
                    <TitleComponent title={title} />
                    <img className='w-6 h-6 dark:bg-white rounded-lg' src={arrow} alt="arrow" />
                </Link>
                <p className='text-base font-normal text-secondary font-inter mb-6'>{desc}</p>
                <div>
                    {btnData?.map((e,index) => {
                        return (
                            <button key={index} className={`rounded-2xl ${e.class} px-2.5 me-2 my-1`}>{e.txt}</button>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
