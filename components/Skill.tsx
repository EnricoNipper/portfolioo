"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importa os componentes Swiper e SwiperSlide
import "swiper/css"; // Importa os estilos CSS do Swiper
import { SkillData } from "@/constants"; // Importa os dados das habilidades
import Image from "next/image"; // Importa o componente Image do Next.js
import { Autoplay } from "swiper/modules"; // Importa o módulo Autoplay do Swiper
import { useTranslations } from "next-intl"; // Importa o hook para traduções

const Skill = () => {
  const t = useTranslations("Skills"); // Obtém as traduções para a seção de habilidades

  return (
    <section // Seção do componente Skill
      style={{ backgroundImage: "url(/bg-2.jpg)" }} // Define a imagem de fundo
      className="text-3xl py-1 dark:text-white" // Define as classes CSS do componente
    >
      <div className="flex flex-col gap-70  text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            {t("p1")} {/* Exibe a tradução da string "p1" */}
          </p>
        </div>

        {/* Swiper 1 - Exibe as habilidades em uma direção */}
        <Swiper
          slidesPerView={5} // Define o número de slides visíveis
          loop={true} // Define se o Swiper deve ser um loop infinito
          autoplay={{
            delay: 0, // Define o atraso para o autoplay (em milissegundos)
            disableOnInteraction: false, // Define se o autoplay deve ser desabilitado quando o usuário interage
          }}
          speed={5000} // Define a velocidade da animação do Swiper (em milissegundos)
          modules={[Autoplay]} // Define os módulos do Swiper a serem usados
          className="max-w-[100%]" // Define a classe CSS do Swiper
        >
          {SkillData.map((skill, index) => ( // Itera sobre os dados das habilidades
            <SwiperSlide key={index}> {/* Define o slide para cada habilidade */}
              <Image
                src={skill.Image} // Define a imagem da habilidade
                alt={skill.name} // Define o texto alternativo da imagem
                width={skill.width} // Define a largura da imagem
                height={skill.height} // Define a altura da imagem
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper 2 - Exibe as habilidades na direção oposta */}
        <Swiper
          slidesPerView={5} // Define o número de slides visíveis
          loop={true} // Define se o Swiper deve ser um loop infinito
          autoplay={{
            delay: 0, // Define o atraso para o autoplay (em milissegundos)
            disableOnInteraction: false, // Define se o autoplay deve ser desabilitado quando o usuário interage
            reverseDirection: true // Define se a direção do autoplay deve ser invertida
          }}
          speed={5000} // Define a velocidade da animação do Swiper (em milissegundos)
          modules={[Autoplay]} // Define os módulos do Swiper a serem usados
          className="max-w-[100%]" // Define a classe CSS do Swiper
        >
          {SkillData.map((skill, index) => ( // Itera sobre os dados das habilidades
            <SwiperSlide key={index}> {/* Define o slide para cada habilidade */}
              <Image
                src={skill.Image} // Define a imagem da habilidade
                alt={skill.name} // Define o texto alternativo da imagem
                width={skill.width} // Define a largura da imagem
                height={skill.height} // Define a altura da imagem
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skill;