import { ChatIcon, EyeIcon, ThumbUpIcon } from '@heroicons/react/solid'
import { ImageCardPros } from './interfaces'

export default function ImageCard({ imageItem }: ImageCardPros) {
  return (
    <a
      href={imageItem.pageURL}
      target="_blank"
      className="group relative cursor-pointer self-center transition-transform hover:scale-110"
      rel="noreferrer"
    >
      <img
        src={imageItem.previewURL}
        alt={imageItem.tags}
        className="min-h-[100px] rounded-md"
      />
      <div className="invisible absolute top-0 h-full w-full rounded-md bg-black opacity-30 group-hover:visible" />
      <div
        data-testid="image-card-info"
        className="invisible absolute top-0 flex h-full w-full flex-col justify-between p-1 text-sm text-white group-hover:visible"
      >
        <span className="font-bold">{imageItem.tags}</span>
        <div className="flex flex-wrap gap-1 text-sm">
          <div className="flex items-center space-x-1">
            <EyeIcon className="h-5 w-4" />
            <span>{imageItem.views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbUpIcon className="h-5 w-4" />
            <span>{imageItem.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChatIcon className="h-5 w-4" />
            <span>{imageItem.comments}</span>
          </div>
        </div>
      </div>
    </a>
  )
}
