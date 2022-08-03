import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as myJson from '../mock-data.json'
import ImageCard from '../ImageCard'

describe('ImageCard', () => {
  test('renders with image data', () => {
    render(<ImageCard imageItem={myJson[0]} />)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(myJson[0].views)).toBeInTheDocument()
    expect(screen.getByText(myJson[0].likes)).toBeInTheDocument()
    expect(screen.getByText(myJson[0].comments)).toBeInTheDocument()
  })
  test('scales on hover', () => {
    render(<ImageCard imageItem={myJson[0]} />)
    // TODO: tailwind classes has a no a clear way to test utility clases
  })
})
