import moviesProjectImg from "./assets/moviesProject.jpg";
import registrationProjectImg from "./assets/registrationProject.jpg";
import registrationProjectImg2 from "./assets/registrationProject2.jpg";
import toDoListProjectImg from "./assets/toDoListProject.jpg";
import portfolioProjectImg from "./assets/portfolioProject.PNG";

import MoviesText from "./components/ProjectTexts.jsx/MoviesText";
import RegistrationText from "./components/ProjectTexts.jsx/RegistrationText";
import RegistrationText2 from "./components/ProjectTexts.jsx/RegistrationText2";
import PortfolioText from "./components/ProjectTexts.jsx/PortfolioText";
import ListText from "./components/ProjectTexts.jsx/ListText";

const projectsData = [
  {
    img: moviesProjectImg,
    header: "Frontend",
    name: "Movies App",
    description: <MoviesText />,
    skills: ["JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/lasha-darchiashvili/Movie-App",
      live: "https://lasha-darchiashvili.github.io/Movie-App/",
    },
    imgOrder: 1,
  },
  {
    img: registrationProjectImg,
    header: "Frontend",
    name: "Registration App",
    description: <RegistrationText />,
    skills: ["JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/lasha-darchiashvili/registration-project",
      live: "https://dashing-moonbeam-142666.netlify.app/",
    },
    imgOrder: 2,
  },
  {
    img: registrationProjectImg2,
    header: "Frontend SPA",
    name: "Registration with Animations",
    description: <RegistrationText2 />,
    skills: ["vue.js", "HTML", "CSS"],
    links: {
      github:
        "https://github.com/lasha-darchiashvili/registration-with-animations",
      live: "https://vocal-horse-75f9bb.netlify.app/",
    },
    imgOrder: 1,
  },
  {
    img: toDoListProjectImg,
    header: "Frontend",
    name: "Simple To Do List",
    description: <ListText />,
    skills: ["JavaScript", "HTML", "CSS"],
    links: {
      github: "https://github.com/lasha-darchiashvili/To-Do-list",
      live: "https://lasha-darchiashvili.github.io/To-Do-list/",
    },
    imgOrder: 2,
  },
  {
    img: portfolioProjectImg,
    header: "Frontend SPA",
    name: "Portfolio",
    description: <PortfolioText />,
    skills: ["React", "Tailwind CSS", "HTML", "CSS"],
    links: {
      github: "https://github.com/lasha-darchiashvili/Portfolio-showcase",
      live: "#",
    },
    imgOrder: 1,
  },
];

export default projectsData;
