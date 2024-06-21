import { useTranslations } from "next-intl";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 60,
    height: 60,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 60,
    height: 60,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 55,
    height: 55,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 60,
    height: 60,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 60,
    height: 60,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 60,
    height: 60,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 60,
    height: 60,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 60,
    height: 60,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 60,
    height: 60,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 60,
    height: 60,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 60,
    height: 60,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];


export const Projects = [
  {
    title: "clone spotify",
    text: "clone do spotify com praticamente tudo que o original tem.  .",
    src: "/web1.png",
  },
  {
    title: "Clone spotify",
    text: "Adicionar musicas, criar playlist, conteúdo premium para assinantes, verificação por e-mail ou GitHub etc.",
    src: "/web2.gif",
  },
  {
    title: "Gerador com ai",
    text: "Usando SaaS para criar chatbots de IA, gerar imagens, vídeos e música com inteligência artificial.",
    src: "/Web3.png",
  },
  {
    title: "Website de barbearia",
    text: "Site amigável e adaptável para clientes, que inclui mapa do Google Maps para encontrar sua localização e vídeos informativos.",
    src: "/web3.gif",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];