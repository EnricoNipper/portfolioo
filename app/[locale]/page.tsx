"use client";  // Indica que o componente é um componente de cliente
import {useTranslations} from 'next-intl';
import Head from "next/head"; // Importa o componente Head para configurar o cabeçalho da página
import { BsFillMoonStarsFill} from "react-icons/bs"; // Importa o ícone da lua cheia para o modo escuro
import { useState } from "react"; // Importa o hook useState para gerenciar o estado do componente
import Particle from "@/components/Particle";
import Nav from '@/components/Nav';
import Portf from '@/components/portf';
import { Link, usePathname } from '@/components/Navigation';
import Skill from '@/components/Skill';
import Project from '@/components/page';
export default function Home() {
  const pathname = usePathname()
  const t = useTranslations("Home");
  // Define o estado do modo escuro usando useState
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <div className={darkMode ? "dark" : ""}> 
    {/* Aplica a classe "dark" ao div se darkMode for true */}
      <Head>
        <title>Portfolio</title> {/* Define o título da página */}
        <meta name="description" content="Generated by create next app" /> {/* Define a descrição da página */}
        <link rel="icon" href="/icon.ico" /> {/* Define o ícone da página */}
      </Head>

      <main className="bg-blue px-10 dark:bg-gray-900 md:px-20 lg:px-40"> {/* Define o estilo da página principal */}
      <section > {/* Seção com altura mínima da tela */}
          <nav className="py-10 mb-2 flex justify-between dark:text-white"> {/* Define a barra de navegação */}
            <h1 className="font-burtons text-xl">{t("h1")}</h1> {/* Título da página */}
            <ul className="flex items-center"> {/* Lista de itens na barra de navegação */}
              <li>
                <BsFillMoonStarsFill
      /* Botão para alternar o modo escuro */         
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
               
                <Link href={pathname} locale='en' className=" cursor-pointer  px-4 py-2 rounded-md ml-8 hover:bg-cyan-500">  English
                  
                  
                 </Link> 
              


              </li>
              <li>
              <Link href={pathname} locale='pt-br' className=" cursor-pointer  px-4 py-2 rounded-md ml-8 hover:bg-cyan-500 ">  Portugues
                 </Link> 
              </li>
              <li>
              <div className="container-botao">
              </div>
              </li>
              <li>
                 {/* Link para o currículo */}
                 <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="Enrico.pdf" 
                  
                  
                >
                   
                  {t("a1")}
                </a>
              </li>
            </ul>
          </nav>
          </section>
          <Nav/>
          <Skill/>
          <Project/>
          <Particle/>
        

        
      </main>
    </div>
  );
}1