"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion' // Importa a biblioteca Framer Motion para animações

interface Props { // Define a interface para as props do componente
    image: string; // URL da imagem do projeto
    title: string; // Título do projeto
    text: string; // Descrição do projeto
}

const ProjectCard = ({ image, title, text}: Props) => { // Define o componente ProjectCard
    const [isFlipped, setIsFlipped] = useState(false) // Estado para controlar se o card está virado
    const [isAnimating, setIsAnimating] = useState(false) // Estado para controlar se o card está em animação

    function handleFlip() { // Função para lidar com o clique no card
        if(!isAnimating) { // Verifica se o card não está em animação
            setIsFlipped(!isFlipped) // Inverte o estado de "isFlipped"
            setIsAnimating(true) // Define "isAnimating" como true para indicar que o card está em animação
        }
    }

  return (
    <div // Div principal do card
    onClick={handleFlip} // Adiciona o evento de clique
    className=' basis-1/3 flex-1' // Define as classes CSS do card
    >    
       <motion.div // Div animada com Framer Motion
        className='max-w-[1040px] h-[280px]' // Define as classes CSS da div animada
        initial={false} // Define o estado inicial da animação
        animate={{rotateY: isFlipped ? 180 : 360}} // Define a animação de rotação
        transition={{ duration: 0.6, animationDirection: 'normal'}} // Define as transições da animação
        onAnimationComplete={() => setIsAnimating(false)} // Define a função a ser executada ao término da animação
        >
            <div // Div para a face frontal do card
            style={{backgroundImage: `url(${image})`}} // Define a imagem de fundo
            className='background-size: cover w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-70'/> {/* Adiciona um efeito de opacidade ao passar o mouse sobre o card */}
                    <div className='absolute inset-0 w-full h-full text-[10px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'> {/*  Adiciona um efeito de exibição ao passar o mouse sobre o card */}
                    <div className='text-center flex flex-col gap-10 py-10 z-[30]'> {/*  Define o conteúdo da face frontal */}
        <h1 className='text-whote text-2xl font-semibold'>{title}</h1> {/*  Exibe o título do projeto */}
        <p className='text-gray-200 text-[17px]'>
            {text} {/* Exibe a descrição do projeto */}
        </p>
      </div>
                    </div>
            </div> 
          
       </motion.div>
       </div>

  )
}

export default ProjectCard // Exporta o componente ProjectCard