import { FC, PropsWithChildren } from 'react'
import { Element } from '../lib/types'

type Props = PropsWithChildren<{
  $?: Element,
  orientation?: 'row' | 'col',
  gap?: number
}>

const Stack: FC<Props> = ({ children, $ = 'div', orientation = 'row', gap = 1 }) => (
  <$ className={`flex flex-${orientation} gap-${gap}`}>
    {children}
  </$>
)

export default Stack