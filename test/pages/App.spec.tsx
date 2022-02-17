import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Item } from '../../src/models/item'
import App from '../../src/pages/App'

describe('App', () => {
  test('should render when start correctely', () => {
    const item: Item = {
      id: 1,
      color: 'red',
      describe: 'any_describe'
    }

    render(<App listItems={[item]} />)

    expect(screen.getByTestId('container').className).toMatch('red')
  })
  test('should render correctely when click in container ', () => {
    const item1: Item = {
      id: 1,
      color: 'red',
      describe: 'any_describe'
    }

    const item2: Item = {
      id: 2,
      color: 'yellow',
      describe: 'any_describe'
    }

    jest.spyOn(global.Math, 'random').mockReturnValue(1)
    render(<App listItems={[item1, item2]} />)

    const container = screen.getByTestId('container')
    expect(container.className).toMatch('red')

    jest.spyOn(global.Math, 'random').mockReturnValue(0.5)
    userEvent.click(container)

    expect(container.className).toMatch('yellow')
  })
})