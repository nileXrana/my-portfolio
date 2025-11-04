import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: 'featured projects',
  projects: [
    {
      id: getId(),
      name: 'Optisense AI',
      description: 'Your Personal AI Assistants for specific tasks.',
      tasks:
        'An opinionated Next.js app for creating own personal AI assistants: uses the App Router, server and client components for fast UI, Prisma for relational storage, and a Gemini-powered AI client to handle conversations. It provides assistant creation, settings, chat UI, feedback collection, REST API routes and Razorpay-powered billing — all designed for extensibility and secure production use.',
      url: 'https://optisense.nileshrana.me/',
      img: '/optisense.png',
      tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'Prisma', 'Razorpay'],
    },
    {
      id: getId(),
      name: 'Syntaxist',
      description: 'An Online Code Compiler with multiple languages.',
      tasks:
        'Run Python, JavaScript, C++, Java, Go, Rust, Ruby, PHP, Swift, C# code instantly. Real-time execution in dockerised container, Interactive Terminal using websocket connection, TC/SC analysis, and smart code suggestions.',
      url: 'https://syntaxist.nileshrana.me/',
      img: '/syntaxist.png',
      tags: ['NextJs', 'TypeScript', 'Express', 'WebSocket', 'Docker'],
    },
  ],
};

export default featuredProjectsSection;
