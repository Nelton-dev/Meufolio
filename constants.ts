import { Project, Experience, Skill, SocialLink, Anime } from './types';

export const PERSONAL_INFO = {
  name: "Nelton da Méria Nazaré Ambate",
  role: "Web Dev, Pentester & Otaku",
  tagline: "Coding, Hacking & Anime. Evoluindo um nível por dia.",
  bio: "Tenho 17 anos e sou de Moçambique. Além de ser formado em Electricidade Instaladora, estou mergulhando no mundo do desenvolvimento Web e Pentest com Kali Linux. Sou movido pela curiosidade de entender como as coisas funcionam, seja um circuito elétrico ou um servidor web.",
  location: "Moçambique",
  email: "neltonambate7@gmail.com",
  whatsapp: "875244921",
  // COLOQUE AQUI O CAMINHO DA SUA FOTO (ex: '/assets/perfil.jpg' ou uma URL)
  // Se deixar vazio "", aparecerá um placeholder no site.
  avatarUrl: "/images/avatar.jpg" 
};

export const SKILLS: Skill[] = [
  { name: "HTML/CSS", level: 60, category: "frontend" },
  { name: "JavaScript", level: 30, category: "frontend" },
  { name: "React (Iniciante)", level: 20, category: "frontend" },
  { name: "Kali Linux", level: 10, category: "tools" },
  { name: "Nmap/Recon", level: 5, category: "tools" },
  { name: "Git", level: 5, category: "tools" },
  { name: "Electricidade Instaladora", level: 75, category: "tools" },
  { name: "Lógica de Prog.", level: 30, category: "backend" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "DeliciasMz",
    description: "Aplicativo criado com o objectivo de promover a culinária moçambicana.",
    tags: ["React", "Tailwind", "Vite"],
    // COLOQUE AQUI A IMAGEM DO PROJETO
    imageUrl: "/images/deliciasmz.jpg", 
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Plataforma de Registro de Oportunidades de Formação inclusiva e Digital(PROFID)",
    description: "Portal de conexão dos estudantes as instituições de ensino.",
    tags: ["Html", "Apache Cordova", "Css", "Javascript"],
    // COLOQUE AQUI A IMAGEM DO PROJETO
    imageUrl: "/images/profid.jpg",
    repoUrl: "#",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Estudante Autodidata",
    company: "Home Office",
    period: "Presente",
    description: "Estudando programação web e segurança ofensiva através de documentações, cursos online e CTFs.",
  },
  {
    id: 2,
    role: "Técnico Instalador",
    company: "Formação Profissional",
    period: "Concluído em 2022",
    description: "Formado em Electricidade Instaladora. Capacitado para realizar instalações elétricas residenciais.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "WhatsApp", url: "https://wa.me/258875244921", icon: "Phone" },
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "Email", url: "mailto:neltonambate7@gmail.com", icon: "Mail" },
];

export const OTAKU_FAVORITES: Anime[] = [
  {
    id: 1,
    title: "Mr. Robot",
    description: "Não é anime, mas é A SÉRIE. Elliot Alderson é a razão pela qual comecei a estudar segurança ofensiva e Linux.",
    quote: "Hello, friend.",
    // COLOQUE AQUI A IMAGEM DA SÉRIE/ANIME
    imageUrl: "/images/mr-robot.jpg"
  },
  {
    id: 2,
    title: "Solo Leveling",
    description: "A jornada de Sung Jin-Woo do Rank E ao topo reflete minha vontade de evoluir minhas skills todo dia.",
    quote: "I am the only one who levels up.",
    imageUrl: "/images/solo-leveling.jpg"
  },
  {
    id: 3,
    title: "Attack on Titan",
    description: "Uma obra prima sobre liberdade e o custo dela. O mundo é cruel, mas também é muito belo.",
    quote: "Shinzou wo Sasageyo!",
    imageUrl: "/images/attack-on-titan.jpg"
  },
  {
    id: 4,
    title: "Kimetsu no Yaiba",
    description: "A respiração da concentração total é basicamente o estado de 'flow' quando estou codando.",
    quote: "Set your heart ablaze!",
    imageUrl: "/images/kimetsu-no-yaiba.jpg"
  },
  {
    id: 5,
    title: "Steins;Gate",
    description: "A inspiração suprema para programadores. Viagens no tempo, IBM 5100 e Dr. Pepper.",
    quote: "El Psy Kongroo.",
    imageUrl: "/images/steins-gate.jpg"
  },
  {
    id: 6,
    title: "Naruto Shippuden",
    description: "Sobre nunca desistir, não importa o quão difícil seja o código ou o bug.",
    quote: "Esse é o meu jeito ninja de ser!",
    imageUrl: "/images/naruto-shippuden.jpg"
  }
];