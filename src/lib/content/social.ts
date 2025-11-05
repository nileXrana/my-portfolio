import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'hugeicons:leetcode',
      url: socialLinks.leetcode,
    },
    {
      icon: 'simple-icons:codechef',
      url: socialLinks.chef,
    },
    {
      icon: 'simple-icons:codeforces',
      url: socialLinks.forces,
    },
  ],
};
