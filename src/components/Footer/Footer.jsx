import React from 'react'
import { Link } from 'react-router-dom'

const Links = [
    {
        path: '#',
        txt: 'Twitter'
    },
    {
        path: '#',
        txt: 'LinkedIn'
    },
    {
        path: '#',
        txt: 'Email'
    },
    {
        path: '#',
        txt: 'RSS feed'
    },
    {
        path: '#',
        txt: 'Add to Feedly'
    }
]

export default function Footer() {
    return (
        <footer className='bg-white dark:bg-dark-mood px-28 max-[834px]:px-5 py-7.5 flex max-[576px]:flex-col-reverse max-[576px]:text-center'>
            <h6 className='font-inter text-xl font-normal mx-3.5 max-[834px]:text-lg max-[768px]:mb-5 dark:text-white'>&copy; 2023</h6>
            <div className='max-[576px]:flex max-[576px]:flex-col max-[576px]:text-center'>
                {Links.map((e, index) => {
                    return (
                        <Link key={index} className='dark:text-white font-inter text-xl font-normal mx-3.5 max-[834px]:text-lg max-[768px]:mb-5' to={e.path}>{e.txt}</Link>
                    )
                })}
            </div>

        </footer>
    )
}
