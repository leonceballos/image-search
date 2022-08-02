import { SearchIcon } from '@heroicons/react/solid'

interface SearchBarProps {
  placeholder?: string
}

function SearchBar({ placeholder }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        className="peer border-b-2 py-2 pl-8 text-lg outline-none focus:border-b-sky-300"
        placeholder={placeholder}
      />
      <SearchIcon className="absolute top-1/2 h-7 w-7 -translate-y-1/2 text-gray-500 peer-focus:text-sky-500" />
    </div>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search'
}

export default SearchBar
