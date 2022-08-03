import { SearchIcon } from '@heroicons/react/solid'
import { SyntheticEvent, useState } from 'react'

interface SearchBarProps {
  placeholder?: string
  onSearch: CallableFunction
}

function SearchBar({ placeholder, onSearch }: SearchBarProps) {
  const [inputText, setInputText] = useState('')

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault()
    onSearch(inputText)
  }
  return (
    <form className="relative" onSubmit={handleSearch}>
      <input
        value={inputText}
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        className="peer border-b-2 py-2 pl-8 text-lg outline-none focus:border-b-sky-300"
        placeholder={placeholder}
      />
      <SearchIcon className="absolute top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 peer-focus:text-sky-500" />
    </form>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search'
}

export default SearchBar
