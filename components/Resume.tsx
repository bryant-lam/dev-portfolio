import React from 'react'

const Resume = () => {
  return (
    <div id="resume" className='py-14'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white min-[1100px]:text-6xl sm:text-5xl text-4xl pb-4 font-bold text-center tracking-wide'>
                Uncover {' '}<span className='text-black-100'>more</span>{' '} of my skills
            </h1>
            <a href="/resume.pdf" target='_blank' className='md:pt-16 pt-8'>
                <div className='md:px-8 md:py-6 py-5 px-7 rounded-[40px] bg-black-100 text-teal font-semibold md:text-2xl text-lg tracking-wide'>View Resume</div>
            </a>
        </div>
    </div>
  )
}

export default Resume;