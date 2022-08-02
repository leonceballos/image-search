import { EyeIcon, ChatIcon, ThumbUpIcon } from '@heroicons/react/solid'

export interface ImagesResultProps {
  data: {
    hits: Array<{
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
    total: number
    totalHits: number
  }
  isLoading: boolean
  isError: boolean
}
function ImagesResult({ data, isError, isLoading }: ImagesResultProps) {
  return (
    <div className="flex w-full flex-wrap items-stretch justify-center gap-3">
      {!data?.hits.length && !isLoading && (
        <h2 className="rounded-md bg-gray-200 p-5">
          No results, Write and search any word to see images results.
        </h2>
      )}
      {isError && (
        <h3 className="rounded-sm bg-red-200 px-2 py-1 text-red-500">
          There was and error with the search. :(
        </h3>
      )}
      {isLoading && <h3>Loading...</h3>}
      {data?.hits.map((image) => (
        <a
          key={image.id}
          href={image.pageURL}
          target="_blank"
          className="group relative cursor-pointer self-center transition-transform hover:scale-110"
          rel="noreferrer"
        >
          <img
            src={image.previewURL}
            alt={image.tags}
            className="min-h-[100px] rounded-md"
          />
          <div className="invisible absolute top-0 h-full w-full rounded-md bg-black opacity-30 group-hover:visible" />
          <div className="invisible absolute top-0 flex h-full w-full flex-col justify-between p-1 text-sm text-white group-hover:visible">
            <span className="font-bold">{image.tags}</span>
            <div className="flex flex-wrap gap-1 text-sm">
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
