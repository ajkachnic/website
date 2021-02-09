import { FC, PropsWithChildren } from 'react'
import { Size, UserSelect } from '../lib/types'

import Text from './text'

type Props = PropsWithChildren<{
  $?: 'h1' | 'h2' | 'h3',
  size?: Size,
  select?: UserSelect,
  href?: string
}>

const Title: FC<Props> = ({ 
  children, 
  $ = 'h2', 
  size='4xl', 
  select='none',
  ...props
}) => {
  return <Text 
    size={size} 
    $={$} 
    weight='bold' 
    tracking='tight' 
    select={select}
    {...props}
  >
    {children}
  </Text>
}

export default Title