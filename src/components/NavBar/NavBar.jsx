import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import menuWhite from "../../images/nav-toggle/menu-white.png"
import menuBlack from "../../images/nav-toggle/menu-black.png"
import XBlack from "../../images/nav-toggle/x-black.png"

const Links = [
    {
        path: '/blog',
        txt: 'Blog'
    },
    {
        path: '/project',
        txt: 'Projects'
    },
    {
        path: '/about',
        txt: 'About'
    },
    {
        path: '/news',
        txt: 'Newsletter'
    }
]

export default function NavBar() {

    const [show, setShow] = useState(false)
    const [header, setHeader] = useState(false)

    const [theme, setTheme] = useState(false)

    const togglekMode = () => {
        setTheme(!theme)
        document.documentElement.classList.toggle("dark", !theme)
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [header])

    return (
        <nav className={`dark:bg-dark-mood bg-white px-28 max-[834px]:px-5 py-7.5 flex justify-between align-middle fixed top-0 left-0 w-full ${header ? 'shadow-md' : ''}`}>
            <h1><Link to={'/'} className='dark:text-white text-primary text-xl max-[834px]:text-lg font-inter font-semibold'>Fatimah Mselmani</Link></h1>
            <div className={`dark:bg-dark-mood bg-white transition-all duration-300 ease-in-out flex align-middle md:justify-between max-[768px]:justify-center max-[768px]:fixed max-[768px]:left-0 max-[768px]:w-screen max-[768px]:h-screen max-[768px]:flex-col max-[768px]:text-center ${show ? 'translate-y-0' : 'max-[768px]:-translate-y-full'}`}>
                <Link className='md:hidden font-inter font-semibold text-xl max-[834px]:text-lg mb-13 dark:text-white' to={'/'}>Fatimah Mselmani</Link>
                <ul className='flex justify-between max-[768px]:flex-col align-middle max-[768px]:text-center'>
                    {Links.map((e, index) => {
                        return (
                            <li key={index} className='font-inter text-xl font-normal mx-3.5 max-[834px]:text-lg max-[768px]:mb-5 dark:text-white'><NavLink to={e.path}>{e.txt}</NavLink></li>
                        )
                    })}
                </ul>
                <div class="relative inline-block w-11 h-5" >
                    <input onChange={togglekMode} id="switch-component-1" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                    <label for="switch-component-1" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                    </label>
                </div>
                <img onClick={() => setShow(!show)} className='hidden max-[768px]:block w-8 h-8 absolute bottom-14 left-1/2 -translate-x-1/2 dark:bg-white rounded-lg' src={XBlack} alt="close" />
            </div>
            <img onClick={() => setShow(!show)} className='hidden max-[768px]:block w-8 h-8 dark:bg-white rounded-lg' src={menuBlack} alt="menu" />


        </nav>
    )
}
