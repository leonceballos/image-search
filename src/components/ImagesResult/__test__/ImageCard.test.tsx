import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as mockData from '../mock-data.json'
import ImageCard from '../ImageCard'

describe('ImageCard', () => {
  test('renders with image data', () => {
    render(<ImageCard imageItem={mockData[0]} />)
    const link = screen.getByRole('link')
    const img = screen.getByRole('img')
    expect(link).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(screen.getByText(mockData[0].views)).toBeInTheDocument()
    expect(screen.getByText(mockData[0].likes)).toBeInTheDocument()
    expect(screen.getByText(mockData[0].comments)).toBeInTheDocument()
    expect(screen.getByText(mockData[0].tags)).toBeInTheDocument()

    expect(link).toHaveAttribute('href', mockData[0].pageURL)
    expect(img).toHaveAttribute('src', mockData[0].previewURL)
  })
})
