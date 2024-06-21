"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className=' basis-1/3 flex-1'
    >    
       <motion.div
        className='max-w-[1040px] h-[280px]'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='background-size: cover w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-70'/>
                    <div className='absolute inset-0 w-full h-full text-[10px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    <div className='text-center flex flex-col gap-10 py-10 z-[30]'>
        <h1 className='text-whote text-2xl font-semibold'>{title}</h1>
        <p className='text-gray-200 text-[17px]'>
            {text}
        </p>
      </div>
                    </div>
            </div> 
          
       </motion.div>
       </div>

  )
}

export default ProjectCard


/**/