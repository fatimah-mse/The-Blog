import React from 'react'

export default function Subscribe({myClass}) {
    return (
        <div className={`text-center max-[576px]:text-start py-8 dark:bg-dark-mood ${myClass}`}>
            <p className='text-base font-semibold font-inter text-purple mb-3'>Newlatters</p>
            <h2 className='text-5xl font-semibold font-inter text-primary mb-6 dark:text-white '>Stories and interviews</h2>
            <p className='text-xl font-semibold font-inter text-secondary mb-10  max-w-3xl mx-auto'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
            <div className='flex max-[576px]:flex-col justify-center items-start'>
                <div>
                    <input className='bg-white rounded-lg border-2 w-88 max-[576px]:w-full text-base font-semibold font-inter text-secondary py-3 px-4 me-4 ' type="email" placeholder='Enter your email' />
                    <p className=' text-start my-2 text-sm font-inter font-normal text-secondary '>We care about your data in our privacy policy</p>
                </div>
                <input className='bg-purple rounded-lg text-base font-semibold font-inter text-white py-3 px-4' type="submit" value='Subscribe' />
            </div>

        </div>
    )
}
