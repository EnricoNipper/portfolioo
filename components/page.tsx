"use client"

import ProjectCard from '@/components/ProjectCard'; // Importa o componente ProjectCard
import { Projects } from '@/constants'; // Importa os dados dos projetos
import { useTranslations } from 'next-intl'; // Importa o hook para traduções
import React from 'react'; // Importa o React

const Project = () => {
  const t = useTranslations("Portf"); // Obtém as traduções para a seção de portfólio

  return (
   // Seção de portfólio // Título da seção
    <section className="py-10 "> 
      <div> 
        <h3 className='text-center'> 
          <span className="text-3xl  font-semibold text-[50px]   text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">{t("h1")}</span> {/* Título da seção com tradução */}
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">  {/* // Descrição do portfólio  */}  
          {t("p1")} {/* Descrição do portfólio com tradução */}
          <span className="text-teal-500"> {t("span1")} </span> {/*  Destaque na descrição com tradução */}
          {t("p2")} {/* Descrição do portfólio com tradução  */} 
          <span className="text-teal-500"> {t("span2")} </span> {/*  Destaque na descrição com tradução */} 
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> {/* Descrição do portfólio  */} 
          {t("p3")} {/* Descrição do portfólio com tradução */} 
        </p>
      </div>

      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'> {/*  Container para os projetos do portfólio */} 
        {Projects.map((project, index) => ( // Itera sobre os dados dos projetos
          <ProjectCard // Renderiza o componente ProjectCard para cada projeto
              key={index} // Define uma chave única para cada projeto
              title={project.title} // Passa o título do projeto para o componente ProjectCard
              text={project.text} // Passa a descrição do projeto para o componente ProjectCard
              image={project.src} // Passa a imagem do projeto para o componente ProjectCard
          />
        ))}
      </div>
    </section>
  )
}

export default Project; // Exporta o componente Project