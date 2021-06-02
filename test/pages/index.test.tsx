// test/pages/index.test.tsx

import IndexPage from 'pages/index'
import { render } from '../testUtils'

describe('Index page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<IndexPage />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})