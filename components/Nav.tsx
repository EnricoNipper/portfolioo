
import { useTranslations } from "next-intl"; // Importa o hook para traduções
import { useState } from "react"; // Importa o hook useState para gerenciar estado
import { AiFillGithub, AiFillInstagram , AiFillLinkedin } from "react-icons/ai"; // Importa os ícones do React Icons
import Image from "next/image"; // Importa o componente Image do Next.js

const Nav = () =>{
  const t = useTranslations("Home"); // Obtém as traduções da chave "Home"
  const [darkMode, setDarkMode] = useState(true); // Inicializa o estado do modo escuro como true

  return (
    <section className="min-h-screen"> {/* Seção com altura mínima da tela */}
      <div className="text-center p-10 py-10"> {/* Container para o conteúdo principal */}
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl"> {/* Nome do desenvolvedor */}
          <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-800 "> Enrico Nipper </span>
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl"> {/* Descrição da profissão */}
          {t("h3")} {/* Exibe a tradução da chave "h3" */}
        </h3> 
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl"> {/* Breve descrição do desenvolvedor */}
          {t("p1")} {/* Exibe a tradução da chave "p1" */}
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"> {/* Ícones de redes sociais */}
         <a href="https://github.com/EnricoNipper">  <AiFillGithub  />   </a> {/* Link para o Instagram */}
          <a href="https://www.instagram.com/enriconipper/">  <AiFillInstagram  />   </a> {/* Link para o Instagram */}
          <a href="https://www.linkedin.com/in/enrico-vicenzo/"> <AiFillLinkedin />   </a> {/* Link para o LinkedIn */}
        </div>
        <div className=" rounded-full w-50 h-50 relative overflow-hidden mt-20 md:h-96 md:w-96"> {/* Imagem de perfil */}
          <Image 
          src="/foto1.jpeg" 
           width="200"
            height="200"
          layout="responsive" 
          objectFit="cover" 
          alt= "Enrico" />   
        </div>
      </div>
    </section> 
  )
};

export default Nav; // Exporta o componente Nav