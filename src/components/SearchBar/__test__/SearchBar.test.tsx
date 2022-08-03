import { render, screen, fireEvent } from '@testing-library/react'
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
  test('updates the input value and call the onSearch callback handler', () => {
    const userInput = 'cats'
    const onSearch = jest.fn()
    render(<SearchBar onSearch={onSearch} />)

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: userInput }
    })
    expect(screen.getByRole('textbox')).toHaveValue(userInput)

    fireEvent.submit(screen.getByRole('textbox'))
    expect(onSearch).toHaveBeenCalledTimes(1)
  })
})
