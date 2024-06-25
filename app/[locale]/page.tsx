"use client";  // Indica que o componente é um componente de cliente
import {useTranslations} from 'next-intl'; // Importa o hook para traduções
import Head from "next/head"; // Importa o componente Head para configurar o cabeçalho da página
import { BsFillMoonStarsFill} from "react-icons/bs"; // Importa o ícone da lua cheia para o modo escuro
import { useState } from "react"; // Importa o hook useState para gerenciar o estado do componente
import Particle from "@/components/Particle"; // Importa o componente Particle
import Nav from '@/components/Nav'; // Importa o componente Nav
import Portf from '@/components/portf'; // Importa o componente Portf (renomeado para 'Portf' para evitar conflito)
import { Link, usePathname } from '@/components/Navigation'; // Importa os componentes Link e usePathname da navegação
import Skill from '@/components/Skill'; // Importa o componente Skill
import Project from '@/components/page'; // Importa o componente Project (renomeado para 'Project' para evitar conflito)

export default function Home() {
  const pathname = usePathname(); // Obtém o caminho atual da página
  const t = useTranslations("Home"); // Obtém as traduções para a chave "Home"
  // Define o estado do modo escuro usando useState
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className={darkMode ? "dark" : ""}> 
      {/* Aplica a classe "dark" ao div se darkMode for true */}
      <Head>
        <title>Portfolio</title> {/* Define o título da página */}
        <meta name="description" content="Enrico Nipper" /> {/* Define a descrição da página */}
        <link rel="icon" href="/icon.ico" /> {/* Define o ícone da página */}
      </Head>

      <main className="overflow-x-hidden bg-blue px-10 dark:bg-gray-900 md:px-20 lg:px-40"> {/* Define o estilo da página principal */}
        <section> {/* Seção com altura mínima da tela */}
          <nav className="py-10 flex justify-between dark:text-white"> {/* Define a barra de navegação */}
            <h1 className="font-burtons text-xl">{t("h1")}</h1> {/* Título da página com tradução */}
            <ul className="flex items-center "> {/* Lista de itens na barra de navegação */}
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)} // Define a função de clique para alternar o modo escuro
                  className=" cursor-pointer " // Define o estilo do ícone
                />
              </li>
              <li>
                 {/* Link para o currículo */}
                 <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="Enrico.pdf" // Define o caminho para o arquivo PDF do currículo
                >
                  {t("a1")} {/* Exibe a tradução da chave "a1" */}
                </a>
              </li>
            </ul>
            </nav>
            <nav className=" mb-2 flex justify-center dark:text-white">
            <ul className="flex items-center ">
            <li>
                <Link href={pathname} locale='en' className=" cursor-pointer px-1  rounded-md ml-1 hover:bg-cyan-500">  English {/* Link para a versão em inglês */}
                 </Link> 
              </li>
              <li>
                <Link href={pathname} locale='pt-br' className=" cursor-pointer  px-4 py-2 rounded-md ml-8 hover:bg-cyan-500 ">  Português {/* Link para a versão em português */}
                 </Link> 
              </li>
            </ul>

          </nav>
        </section>
        <Nav/>     {/*Renderiza o componente Nav */}
        <Skill/>   {/*Renderiza o componente Skill */}
        <Project/> {/* Renderiza o componente Project */}
        <Particle/>{/* Renderiza o componente Particle */}
      </main>
    </div>
  );
}