import { ImagesResultProps } from './interfaces'
import ImageCard from './ImageCard'

function ImagesResult({ data, isError, isLoading }: ImagesResultProps) {
  if (!data?.hits.length && !isLoading && !isError) {
    return (
      <h2 className="rounded-md bg-gray-200 p-5">
        No results, Write and search any word to see images.
      </h2>
    )
  }
  if (isError) {
    return (
      <h3 className="rounded-sm bg-red-200 px-2 py-1 text-red-500">
        There was and error with the search. :(
      </h3>
    )
  }
  if (isLoading) return <h3>Loading...</h3>
  return (
    <ul className="flex w-full flex-wrap items-stretch justify-center gap-3">
      {data?.hits.map((image) => (
        <li key={image.id}>
          <ImageCard imageItem={image} />
        </li>
      ))}
    </ul>
  )
}

export default ImagesResult
