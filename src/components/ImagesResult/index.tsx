import { ImagesResultProps } from './interfaces'
import ImageCard from './ImageCard'

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
        <ImageCard key={image.id} imageItem={image} />
      ))}
    </div>
  )
}

export default ImagesResult
