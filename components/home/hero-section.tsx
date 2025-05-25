import { Button } from "@/components/ui/button"

import { siteConfig } from '@/config/site';
import { Icons } from "../shared/icons";

export default function HomeHeroSetion() {
    return (
        <section className="bg-background">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <a href={siteConfig.links.githubProject} className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                    <span className="text-xs bg-primary rounded-full text-background px-4 py-1.5 mr-3">Open source</span> <span className="text-sm font-medium">Смотрите исходники на GitHub</span>
                    <Icons.homeArrow className="ml-2 w-5 h-5"/>
                </a>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Учебный pet-проект</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Веб-приложение для прослушивания книг, созданное с использованием Next JS и простых компонентов из библиотеки shadcn/ui</p>
            </div>
        </section>
    );
}
