import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import SearchBar from '../index'

describe('SearchBar', () => {
  test('renders default SearchBar', () => {
    render(<SearchBar onSearch={() => {}} />)
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
  test('renders with custom placeholder', () => {
    const placeholder = 'Type any word.'
    render(<SearchBar onSearch={() => {}} placeholder={placeholder} />)
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
  })
})
