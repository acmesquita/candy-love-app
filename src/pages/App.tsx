import { useState } from 'react'
import { Item } from '../models/item'
import { generateRandomColor } from '../service'
import { Title, Footer, Container } from '../components'

import style from '../styles/pages/app.module.css'

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
      <Container item={item} onClick={newItem}/>
      <Footer />
    </main>
  )
}

export default App
