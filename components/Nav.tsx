
import { useTranslations } from "next-intl";
import { useState } from "react";
import { AiFillInstagram , AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";

const Nav = () =>{
    const t = useTranslations("Home");
    const [darkMode, setDarkMode] = useState(true);
    return (
        <section className="min-h-screen"> {/* Seção com altura mínima da tela */}
          <div className="text-center p-10 py-10"> {/* Container para o conteúdo principal */}
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
             <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-800 "> Enrico Nipper </span>
            </h2> {/* Nome do desenvolvedor */}
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            {t("h3")}
            </h3> 
          {/* Descrição da profissão */}
          
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              {t("p1")}         
            </p> {/* Breve descrição do desenvolvedor */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"> {/* Ícones de redes sociais */}
            <a href="https://www.instagram.com/enriconipper/">  <AiFillInstagram  />   </a>
            <a href="https://www.linkedin.com/in/enrico-vicenzo/"> <AiFillLinkedin />   </a>
            
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96"> {/* Imagem de perfil */}
              <Image src="/foto1.jpeg" layout="fill" objectFit="cover" alt= "Enrico" />   
            </div>
          </div>
        </section> 
          )
          };
export default Nav;