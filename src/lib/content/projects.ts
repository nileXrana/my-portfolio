import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'tasky',
      url: 'https://tasky-smoky.vercel.app/',
      repo: 'https://github.com/nileXrana/Tasky',
      img: '/tasky2.png',
      year: 2025,
      tags: ['ReactJS', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'recipe generator',
      url: 'https://github.com/nileXrana/Recipe-Generator',
      repo: 'https://github.com/nileXrana/Recipe-Generator',
      img: '/recipe.png',
      year: 2025,
      tags: ['React', 'Express'],
    },
    {
      id: getId(),
      name: 'nilesify music player',
      url: 'https://nilesify-music-player.vercel.app/',
      repo: 'https://github.com/nileXrana/Nilesify-Music_Player',
      img: '/nilesify.png',
      year: 2025,
      tags: ['Tailwind', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'basic calculator',
      url: 'https://calculator-gilt-six-23.vercel.app/',
      repo: 'https://github.com/nileXrana/calculator',
      img: '/calculator.png',
      year: 2025,
      tags: ['html', 'css', 'JvaScript'],
    },
    {
      id: getId(),
      name: 'bit links',
      url: 'https://bitlinks.nileshrana.me',
      repo: 'https://github.com/nileXrana/BitLinks',
      img: '/bitlinks.png',
      year: 2025,
      tags: ['NextJS', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'travel guide bot',
      url: 'https://travel-guide-bot.vercel.app/',
      repo: 'https://github.com/nileXrana/Travel-Guide-Bot',
      img: '/travelbot.png',
      year: 2025,
      tags: ['NextJS', 'TypeScript'],
    },
  ],
};
