import { projects } from '@/data'
import React from 'react'
import { HoverEffect } from './ui/CardHoverEffect'

const RecentProjects = () => {
  return (
    <div id='projects'>
      <h1 className='min-[1100px]:pt-32 md:text-6xl text-4xl text-white font-bold text-center tracking-wide'>
        A {' '}
        <span className='text-black-100'>snapshot</span> of my work
      </h1>
      <HoverEffect items={projects} />
    </div>
  )
}

export default RecentProjects;