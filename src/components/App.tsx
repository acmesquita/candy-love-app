import { useState } from 'react'
import { Item } from '../models/item'
import { generateRandomColor } from '../service'
import { Title, Footer } from '../components'

import style from '../styles/app.module.css'

type Props = {
  listItems: Item[]
}

function App({ listItems }: Props) {
  const [item, setItem] = useState<Item | null>(generateRandomColor(listItems))

  function newItem() {
    setItem(generateRandomColor(listItems))
  }

  return (
    <main className={style.mainWrapper}>
      <Title />
      <div
        className={`${style.container} ${style[item?.color || 'red']}`}
        onClick={newItem}
        data-testid="container"
      >
        <small className={style.id}>{item?.id}</small>
        <h2>{item?.describe}</h2>
      </div>
      <Footer />
    </main>
  )
}

export default App
