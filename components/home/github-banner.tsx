import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Icons } from '../shared/icons';
import { siteConfig } from '@/config/site';

export default function GithubBanner() {
  return (
    <Alert className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 w-auto">
      <Link
        href={siteConfig.links.githubProject}
        className="inline-flex items-center"
        role="alert"
      >
        <Badge className="mr-3 rounded-full px-4 py-1.5 text-xs" variant="default">
          Open source
        </Badge>
        <AlertDescription className="text-sm font-medium whitespace-nowrap">
          Смотрите исходники на GitHub
        </AlertDescription>
        <Icons.homeArrow className="ml-2 h-5 w-5" />
      </Link>
    </Alert>
  )
}

