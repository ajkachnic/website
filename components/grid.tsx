import { FC, PropsWithChildren } from 'react'
import { Element } from '../lib/types'

type Props = PropsWithChildren<{
  $?: Element,
  gap?: number
}>

const Grid: FC<Props> = ({ children, $ = 'div', gap = 1 }) => (
  <$ className={`grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-${gap}`}>
    {children}
  </$>
)

export default Grid