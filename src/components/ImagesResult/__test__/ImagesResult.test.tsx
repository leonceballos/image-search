import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as mockData from '../mock-data.json'
import ImagesResult from '../index'

describe('ImagesResult', () => {
  test('shows no result message', () => {
    render(
      <ImagesResult
        isError={false}
        isLoading={false}
        data={{ hits: [], total: 0, totalHits: 0 }}
      />
    )
    expect(
      screen.getByText('No results, Write and search any word to see images.')
    ).toBeInTheDocument()
  })
  test('shows loading state', () => {
    render(<ImagesResult isError={false} isLoading data={undefined} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
  test('shows error message', () => {
    render(<ImagesResult isError isLoading={false} data={undefined} />)
    expect(
      screen.getByText('There was and error with the search. :(')
    ).toBeInTheDocument()
  })
  test('shows results data', () => {
    render(
      <ImagesResult
        isError={false}
        isLoading={false}
        data={{ hits: mockData, total: 3, totalHits: 3 }}
      />
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
