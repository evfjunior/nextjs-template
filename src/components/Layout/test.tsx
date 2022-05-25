import { render, screen } from '@testing-library/react'

import { Layout } from '.'

describe('<Layout />', () => {
  it('should render the component and content correctly', () => {
    render(
      <Layout>
        <p>content</p>
      </Layout>
    )

    const component = screen.getByRole('main')
    const content = screen.getByText(/content/i)

    expect(component).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
