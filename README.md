Site de Portfólio com Next.js e Internacionalização
Este repositório contém o código para um site de portfólio construído com Next.js, com internacionalização, modo escuro e diversos elementos interativos.
Recursos:
Internacionalização (i18n): O site suporta múltiplos idiomas (Inglês e Português) usando a biblioteca next-intl.
Modo Escuro: Os usuários podem alternar entre os modos claro e escuro usando um botão dedicado.
Componentes Interativos:
Animação de Partículas: Uma animação de partículas visualmente atraente no fundo adiciona um toque dinâmico.
Cartões de Projetos: Cartões de projetos exibem informações e imagens com um efeito de animação de rotação.
Ícones de Habilidades: Ícones de habilidades animados dinamicamente mostram sua experiência.
Links de Navegação: Transições suaves entre páginas usando navegação do lado do cliente.
Design Responsivo: O site foi projetado para se adaptar a diferentes tamanhos de tela, proporcionando uma visualização ideal em todos os dispositivos.
Imagens Otimizadas: As imagens são carregadas de forma eficiente usando o componente Image do Next.js para um desempenho mais rápido.
Estrutura:
O projeto está organizado nas seguintes pastas:
components: Contém componentes reutilizáveis para vários elementos do site.
Nav.js: O componente da barra de navegação.
Skill.js: O componente de ícones de habilidades.
ProjectCard.js: O componente de cartão de projeto.
Particle.js: O componente de animação de partículas.
Navigation.js: Componentes para links de navegação.
page.js: O componente de página para exibir projetos.
constants: Contém dados e constantes usados em todo o aplicativo.
Projects.js: Um array de dados de projetos.
public: Contém ativos estáticos, como imagens e ícones.
styles: Contém folhas de estilo globais para o site.
pages: Contém os componentes principais da página.
index.js: O componente da página inicial.
Começando:
Pré-requisitos:
Node.js e npm instalados.
Clone o Repositório:
git clone https://github.com/seu-nome-de-usuario/site-de-portfolio.git
Instale as Dependências:
npm install
Execute o Servidor de Desenvolvimento:
npm run dev
Acesse o Site:
Abra http://localhost:3000 em seu navegador da web.
Configuração:
Internacionalização:
A biblioteca next-intl é configurada no arquivo next.config.js para lidar com traduções.
As chaves de tradução são definidas na pasta locales.
Modo Escuro:
O estado darkMode é gerenciado pelo hook useState e alternado usando o ícone BsFillMoonStarsFill.
A classe dark é aplicada ao elemento de contêiner principal para ativar estilos do modo escuro.
Personalização:
Conteúdo: Atualize o conteúdo nos arquivos pages/index.js, components/Nav.js, components/ProjectCard.js e constants/Projects.js.
Estilos: Personalize os estilos na pasta styles.
Imagens: Substitua as imagens de espaço reservado na pasta public por suas próprias imagens.
Dados do Projeto: Adicione ou modifique os dados do projeto no arquivo constants/Projects.js.
Contribuição:
Sinta-se à vontade para contribuir com este projeto, enviando problemas ou solicitações de pull.
Aproveite a construção do seu próprio site de portfólio impressionante!