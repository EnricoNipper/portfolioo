import { useTranslations } from 'next-intl'; // Importa o hook para traduções
import Image from 'next/image'; // Importa o componente Image do Next.js

const Portf = () => {
  const t = useTranslations("Portf"); // Obtém as traduções para a seção de portfólio

  return (
    <section className="py-10"> {/* Seção de portfólio */}
      <div>
        <h3 className='text-center'> {/* Título da seção */}
          <span className="text-3xl  font-semibold text-[50px]   text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 ">{t("h1")}</span> {/* Título da seção com tradução */}
        </h3> 
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> {/* Descrição do portfólio */}
          {t("p1")} {/* Descrição do portfólio com tradução */}
          <span className="text-teal-500"> {t("span1")} </span> {/* Destaque na descrição com tradução */}
          {t("p2")} {/* Descrição do portfólio com tradução */}
          <span className="text-teal-500"> {t("span2")} </span> {/* Destaque na descrição com tradução */}
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"> {/* Descrição do portfólio */}
          {t("p3")} {/* Descrição do portfólio com tradução */}
        </p>
      </div>

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"> {/* Container para os projetos do portfólio */}
        <div className="basis-1/3 flex-1 "> {/* Div para cada projeto */}
          <Image
            className="rounded-lg object-cover"
            src="/web1.png" // Caminho para a imagem do projeto
            alt="Project 1" // Texto alternativo para a imagem
            width="300" // Largura da imagem
            height="200" // Altura da imagem
            layout="responsive" // Define o layout da imagem
          />
        </div>
        {/* Divs para os outros projetos, seguindo o mesmo padrão */}
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width="300"
            height="200"
            layout="responsive"
            src="/web2.png"
            alt="Project 2"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width="300"
            height="200"
            layout="responsive"
            src="/web3.png"
            alt="Project 3"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width="300"
            height="200"
            layout="responsive"
            src="/web4.png"
            alt="Project 4"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width="300"
            height="200"
            layout="responsive"
            src="/web5.png"
            alt="Project 5"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover"
            width="300"
            height="200"
            layout="responsive"
            src="/web6.png"
            alt="Project 6"
          />
        </div>
      </div>
    </section>
  );
};

export default Portf; // Exporta o componente Portf