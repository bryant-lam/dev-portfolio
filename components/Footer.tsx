import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-24 pb-6 w-[96vw]'>
        <div className='flex min-[1100px]:flex-row flex-col-reverse lg:justify-between justify-center min-[1100px]:items-end'>
            <p className='text-green-600 text-sm font-medium min-[1100px]:text-left text-center pt-4'>
            Copyright © Bryant Lam 2024
            </p>
            <p className='text-green-600 text-sm font-medium min-[1100px]:w-[40vw] xl:w-[23vw] min-[1100px]:px-0 px-4 min-[1100px]:text-right text-center'>
            Loosely designed in <span className='font-bold'>Figma</span> and coded in <span className='font-bold'>Visual Studio Code</span>. 
            Built with <span className='font-bold'>Next.js</span> and <span className='font-bold'>Tailwind CSS</span>, deployed with <span className='font-bold'>Vercel</span>.
            </p>
        </div>
    </footer>
  )
}

export default Footer;