import { ImagesResultProps } from './interfaces'
import ImageCard from './ImageCard'
import ResultHeader from './ResultHeader'

function ImagesResult({
  data,
  isError,
  isLoading,
  lastItemRef
}: ImagesResultProps) {
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

  return (
    <>
      {!!data?.hits.length && (
        <ResultHeader total={data.total} totalHits={data.totalHits} />
      )}
      <ul className="flex w-full flex-wrap items-stretch justify-center gap-3">
        {data?.hits.map((image) => (
          <li key={image.id} ref={lastItemRef}>
            <ImageCard imageItem={image} />
          </li>
        ))}
      </ul>
      {isLoading && <h3>Loading...</h3>}
    </>
  )
}

export default ImagesResult
