import { siteConfig } from '@/config/site';
import { Icons } from '../shared/icons';
import GithubBanner from './github-banner';

export default function HomeHeroSetion() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <GithubBanner />
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
