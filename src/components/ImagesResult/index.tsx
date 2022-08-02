import { EyeIcon, ChatIcon, ThumbUpIcon } from '@heroicons/react/solid'

interface ImagesResultProps {
  data: Array<{
    id: number
    type: string
    tags: string
    previewURL: string
    previewWidth: number
    previewHeight: number
    views: number
    likes: number
    comments: number
    pageURL: string
  }>
}
function ImagesResult({ data }: ImagesResultProps) {
  return (
    <div className="flex w-full flex-wrap justify-center gap-3">
      {!data.length && (
        <h2 className="rounded-md bg-gray-200 p-5">
          Write and search any word to see images results.
        </h2>
      )}
      {data.map((image) => (
        <a
          key={image.id}
          href={image.pageURL}
          target="_blank"
          className="group relative cursor-pointer transition-transform hover:scale-110"
          rel="noreferrer"
        >
          <img src={image.previewURL} alt={image.tags} className="rounded-md" />
          <div className="invisible absolute top-0 h-full w-full rounded-md bg-black opacity-30 group-hover:visible" />
          <div className="invisible absolute top-0 flex h-full w-full flex-col justify-between p-2 text-sm text-white group-hover:visible">
            <span className="font-bold">{image.tags}</span>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1">
                <EyeIcon className="h-5 w-4" />
                <span>{image.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbUpIcon className="h-5 w-4" />
                <span>{image.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ChatIcon className="h-5 w-4" />
                <span>{image.comments}</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ImagesResult
