import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stefanos', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Stefanos',
  subtitle: `I\'m a Software engineer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Policy junky turned developer with a passion for building technological tools for social and economic empowerment.` ,
  paragraphTwo: `Found my passion for programming while studying Economics and conducting policy research during my college education and realized that most of the interesting and dynamic solutions to complex problems were produced by technologists, not economists.`, 
  paragraphThree: `I'm seeking opportunities to grow within a team building production level scalable code that makes an impact.`,

  resume: `https://docs.google.com/document/d/1hk2jZiVqbQ29nvbFlAkKHVOZjU_dY2soz4DzNXzytKI/edit?usp=sharing`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'trivia.png',
    title: 'Trivia App',
    info: `This project is a web app trivia quiz game. Where a player answers 10 multiple choice questions in a round of trivia. At the end of the game a player can see their score.`,
    info2: `Technologies used to build this project were TypeScript, React Hooks and styled components.`,
    url: '',
    repo: 'https://github.com/stefanosu/trivia-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/StefanosUgbit',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@stefanosu422',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stefanosugbit/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/stefanosu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
