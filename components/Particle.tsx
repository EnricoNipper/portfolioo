import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // ... (sua configuração de partículas personalizada)
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Seu outro conteúdo aqui */}

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
           interactivity: {
             events: {
               onClick: {
                 enable: true,
                 mode: "push",
               },
               onHover: {
                 enable: true,
                 mode: "repulse",
               },
               resize: true,
             },
             modes: {
               push: {
                 quantity: 4,
               },
               repulse: {
                 distance: 200,
                 duration: 0.4,
               },
             },
           },
           particles: {
             color: {
               value: "#5C77C5",
             },
             links: {
               color: "5C77C5",
               distance: 120,
               enable: true,
               opacity: 0.5,
               width: 1,
             },
             move: {
               direction: "none",
               enable: true,
               outModes: {
                 default: "bounce",
               },
               random: false,
               speed: 1,
               straight: false,
             },
             number: {
               density: {
                 enable: true,
                 area: 800,
               },
               value: 60,
             },
             opacity: {
               value: 0.5,
             },
             shape: {
               type: "circle",
             },
             size: {
               value: { min: 2, max: 5 },
             },
           },
           detectRetina: true,
          // ... (suas opções de partículas)
          background: {
            color: {
              value: "transparent", // Tornar o fundo transparente
            },
          },
        }}
        style={{
          position: "absolute", // Tornar as partículas posicionadas de forma absoluta
          top: 0,
          left: 0,
          width: "100%", // Definir largura e altura para preencher o container
          height: "100%",
        }}
      />
    </div>
  );
};

export default Particle;
