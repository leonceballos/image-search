// import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ImagesResult from './components/ImagesResult'
import SearchBar from './components/SearchBar'
import { getImagesByQuery } from './services/pixabay'

function App() {
  const [searchText, setSearchText] = useState('')
  const query = useQuery(['images', { searchText }], () =>
    getImagesByQuery({ searchText })
  )

  return (
    <div className="container mx-auto flex flex-col items-center space-y-2 px-3 py-5">
      <h1 className="text-3xl font-bold text-gray-900">Image Search!</h1>
      <SearchBar onSearch={setSearchText} />
      <ImagesResult
        isLoading={query.isLoading}
        isError={query.isError}
        data={query.data}
      />
    </div>
  )
}

export default App
