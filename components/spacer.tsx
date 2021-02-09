import { FC, PropsWithChildren } from 'react'
import { Element } from '../lib/types'

type Props = PropsWithChildren<{
  $?: Element,
  axis?: 'vertical' | 'horizontal',
  size?: 0 | 2 | 4 | 8 | 16
}>

const getClasses = (axis?: 'vertical' | 'horizontal', size?: 0 | 2 | 4 | 8 | 16): string => {
  // Please don't hate me, purgecss is holding me hostage
  // Send help!
  if(axis === 'vertical') {
    if(size === 0) return  `h-0 min-h-0`
    if(size === 2) return  `h-2 min-h-2`
    if(size === 4) return  `h-4 min-h-4`
    if(size === 8) return  `h-8 min-h-8`
    if(size === 16) return `h-16 min-h-16`
  } else if(axis === 'horizontal') {
    if(size === 0) return  `w-0 min-w-0`
    if(size === 2) return  `w-2 min-w-2`
    if(size === 4) return  `w-4 min-w-4`
    if(size === 8) return  `w-8 min-w-8`
    if(size === 16) return `w-16 min-w-16`
  }
}

const Spacer: FC<Props> = ({ children, $ = 'span', size = 0, axis = 'vertical'}) => {
  const width  = getClasses('vertical', axis === 'vertical' ? size : 0)
  const height = getClasses('horizontal', axis === 'horizontal' ? size : 0)

  return (
    <$ className={`${width} ${height} block`}>
      {children}
    </$>
  )
}

export default Spacer