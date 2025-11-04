import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for internship, job or any new freelance opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open for all. 📩',
  ],
  link: `mailto:${author.email}`,
};
