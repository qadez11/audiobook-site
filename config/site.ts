export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Audiobook library',
  description:
    'A small project to develop development skills',
  mainNav: [
    {
      title: 'Main',
      href: '/',
    },
    {
      title: 'Books',
      href: '/books',
    },
        {
      title: 'Authors',
      href: '/authors',
    },
  ],
  links: {
    github: 'https://github.com/qadez11/'
  },
};
