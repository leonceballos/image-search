import { ViewListIcon, CollectionIcon } from '@heroicons/react/solid'

interface ResultHeaderProps {
  total: number
  totalHits: number
}

export default function ResultHeader({ total, totalHits }: ResultHeaderProps) {
  return (
    <nav className="flex gap-3">
      <div className="flex items-center gap-1">
        <ViewListIcon className="h-5 w-4" />
        <span>{`Total: ${total}`}</span>
      </div>
      <div className="flex items-center gap-1">
        <CollectionIcon className="h-5 w-4" />
        <span>{`Total hits: ${totalHits}`}</span>
      </div>
    </nav>
  )
}
