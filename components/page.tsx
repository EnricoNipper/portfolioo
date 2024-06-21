"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import { useTranslations } from 'next-intl'
import React from 'react'

const Project = () => {
  const t = useTranslations("Portf");
  return (
    <section className="py-10 " > 
     <div>
            <h3 className='text-center'> 
              <span className="text-3xl  font-semibold text-[50px]   text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">{t("h1")}</span></h3> {/* Título da seção */}
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {t("p1")}
            <span className="text-teal-500"> {t("span1")} </span>
             {t("p2")}
              <span className="text-teal-500"> {t("span2")} </span>
            </p> {/* Descrição do portfólio */}
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            {t("p3")}
            </p> {/* Descrição do portfólio */}
          </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
          />
        ))}
      </div>
    </section>
  )
}

export default Project;