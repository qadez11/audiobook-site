export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Библиотека аудиокниг',
  description:
    'Небольшой проект для развития навыков разработки.',
  mainNav: [
    {
      title: 'Главная',
      href: '/',
    },
    {
      title: 'Книги',
      href: '/books',
    },
        {
      title: 'Авторы',
      href: '/authors',
    },
  ],
  links: {
    github: 'https://github.com/qadez11/'
  },
};
