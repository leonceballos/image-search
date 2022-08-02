import ImagesResult from './components/ImagesResult'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="container mx-auto flex flex-col items-center space-y-2 px-3 py-5">
      <h1 className="text-3xl font-bold text-gray-900">Image Search!</h1>
      <SearchBar />
    </div>
  )
}

export default App
