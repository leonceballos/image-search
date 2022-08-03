import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect, useRef, useState } from 'react'
import ImagesResult from './components/ImagesResult'
import SearchBar from './components/SearchBar'
import { getImagesByQuery } from './services/pixabay'

function App() {
  const [searchText, setSearchText] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [accumData, setAccumData] = useState({
    hits: [],
    total: 0,
    totalHits: 0
  })

  const { isLoading, isError, data } = useQuery(
    ['images', { searchText, pageNumber }],
    () => getImagesByQuery({ searchText, pageNumber })
  )
  const observer = useRef<IntersectionObserver>()
  const lastItemRef = useCallback(
    (node: HTMLElement) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          accumData.totalHits > accumData.hits.length
        ) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, accumData.totalHits]
  )

  useEffect(() => {
    if (data?.hits) {
      setAccumData((prev) => ({ ...data, hits: [...prev.hits, ...data.hits] }))
    }
  }, [data])

  const handleSearch = (inputText: string) => {
    setSearchText(inputText)
    setAccumData({
      hits: [],
      total: 0,
      totalHits: 0
    })
    setPageNumber(1)
  }
  return (
    <div className="container mx-auto flex flex-col items-center space-y-2 px-3 py-5">
      <h1 className="text-3xl font-bold text-gray-900">Image Search!</h1>
      <SearchBar onSearch={handleSearch} />
      <ImagesResult
        isLoading={isLoading}
        isError={isError}
        data={accumData}
        lastItemRef={lastItemRef}
      />
    </div>
  )
}

export default App
