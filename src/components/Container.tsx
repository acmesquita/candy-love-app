import { Item } from '../models/item'
import style from '../styles/components/container.module.css'

type Props = {
  item: Item | null
  onClick: () => void
}

export function Container({ item, onClick }: Props) {
  return (
    <div
      className={`${style.container} ${style[item?.color || 'red']}`}
      onClick={onClick}
      data-testid="container"
    >
      <small className={style.id}>{item?.id}</small>
      <h2>{item?.describe}</h2>
    </div>
  )
}