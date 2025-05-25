import { siteConfig } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-grid border-t py-6 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-muted-foreground text-center text-sm leading-loose text-balance md:text-left">
            Создано qadez11. Исходный код доступен на{' '}
            <a
              href={siteConfig.links.githubProject}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
