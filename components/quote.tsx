import { FC, PropsWithChildren } from 'react'
import { responsiveSize } from '../lib/adjust'
import { Size, UserSelect, FontWeight, TextElement } from '../lib/types'

import Text from './text'

type Props = PropsWithChildren<{
  size?: Size,
  $?: TextElement,
  select?: UserSelect,
  weight?: FontWeight
}>

const Quote: FC<Props> = ({ 
  children, 
  size='lg', 
  $ = 'p',
  select='auto', 
  weight = 'normal'
}) => {
  return (
    <blockquote>
      <Text $={$} size={size} select={select} weight={weight} tracking='wide' opacity={60}>
        {children}
      </Text>
    </blockquote>
  )
}

export default Quote