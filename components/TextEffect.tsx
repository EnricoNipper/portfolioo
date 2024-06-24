"use client"
import { TypeAnimation } from 'react-type-animation'; // Importa o componente TypeAnimation

function TextEffect(name : string) { // Define a função TextEffect que recebe o nome como argumento
  return (
    <TypeAnimation // Renderiza o componente TypeAnimation
      sequence={[
        // Define a sequência de animações de texto
        // 
        name, // Exibe o nome inicialmente
        1500, // Espera 1500 milissegundos
        'web developer', // Exibe "web developer"
        1500, // Espera 1500 milissegundos
        'designer', // Exibe "designer"
        1500, // Espera 1500 milissegundos
        'programmer', // Exibe "programmer"
        1500 // Espera 1500 milissegundos
      ]}

      speed={50} // Define a velocidade da animação (em caracteres por segundo)
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase' // Define as classes CSS do texto
      repeat={Infinity} // Define que a animação deve ser repetida infinitamente
    />
  );
}

export default TextEffect // Exporta a função TextEffect