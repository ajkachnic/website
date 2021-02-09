import { FC, PropsWithChildren } from 'react'
import { Element } from '../lib/types'

type Props = PropsWithChildren<{
  $?: Element,
  // Purposefully limited because purgecss
  gap?: 4 | 8
}>

const Grid: FC<Props> = ({ children, $ = 'div', gap = 4 }) => (
  <$ className={`grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 ${gap === 4 ? `gap-4` : `gap-8`}`}>
    {children}
  </$>
)

export default Grid