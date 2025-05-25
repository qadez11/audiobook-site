import { siteConfig } from '@/config/site';
import { Icons } from '../shared/icons';

export default function HomeHeroSetion() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <a
          href={siteConfig.links.githubProject}
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          role="alert"
        >
          <span className="bg-primary text-background mr-3 rounded-full px-4 py-1.5 text-xs">
            Open source
          </span>{' '}
          <span className="text-sm font-medium">
            Смотрите исходники на GitHub
          </span>
          <Icons.homeArrow className="ml-2 h-5 w-5" />
        </a>
        <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Учебный pet-проект
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
          Веб-приложение для прослушивания книг, созданное с использованием Next
          JS и простых компонентов из библиотеки shadcn/ui
        </p>
      </div>
    </section>
  );
}
