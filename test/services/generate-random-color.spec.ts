import { Item } from '../../src/models/item'
import { generateRandomColor } from '../../src/service'

describe('generateRandomColor', () => {
  test('should return one Item when call with list valid', () => {
    const listItems: Item[] = [{ color: 'red', describe: 'Loren', id: 1}]

    const item = generateRandomColor(listItems)

    expect(item.color).toBe('red')
  })
  test('should return null when call with list invalid', () => {
    const item = generateRandomColor(null)

    expect(item).toBeNull()
  })
  test('should return null when call with list without items', () => {
    const item = generateRandomColor([])

    expect(item).toBeNull()
  })
})