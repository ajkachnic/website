import { FC, PropsWithChildren } from 'react'
import { Size, UserSelect } from '../lib/types'

import Text from './text'
import Link from './link'

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
  href 
}) => {
  if(href) {
    return (
      <Link href={href} active={false}>
        <Text 
          size={size} 
          $={$} 
          weight='bold' 
          tracking='tight' 
          select={select}
        >
          {children}
        </Text>
      </Link>
    )
  }

  return <Text 
    size={size} 
    $={$} 
    weight='bold' 
    tracking='tight' 
    select={select}
  >
    {children}
  </Text>
}

export default Title