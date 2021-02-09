import { FC, PropsWithChildren } from 'react'
import { Element } from '../lib/types'

type Props = PropsWithChildren<{
  $?: Element,
  axis?: 'vertical' | 'horizontal',
  size?: number
}>

const Spacer: FC<Props> = ({ children, $ = 'span', size = 0, axis = 'vertical'}) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <$ className={`w-${width} min-w-${width} h-${height} min-h-${height} block`}>
      {children}
    </$>
  )
}

export default Spacer