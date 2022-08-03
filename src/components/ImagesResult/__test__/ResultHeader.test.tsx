import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ResultHeader from '../ResultHeader'

describe('ResultHeader', () => {
  test('shows with data when results', () => {
    const total = 10
    const totalHits = 200
    render(<ResultHeader total={total} totalHits={totalHits} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(`Total: ${total}`)).toBeInTheDocument()
    expect(screen.getByText(`Total hits: ${totalHits}`)).toBeInTheDocument()
  })
})
