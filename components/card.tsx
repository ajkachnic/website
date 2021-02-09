import { FC } from 'react'
import { Size, Element } from '../lib/types'

import Title from './title'
import Text from './text'
import Quote from './quote'

type Props = {
  $?: Element,
  size?: Size,
  title: string,
  quote?: string
  body: string,
  href?: string
}

const Card: FC<Props> = ({ 
  $ = 'div',
  title, 
  quote,
  body,
  href
}) => {
  const classes = [
    'bg-gray-50',
    'dark:bg-gray-900', 
    'py-2', 
    'px-4', 
    'rounded-md',
    'shadow-md',
  ]
  
  return (
    <$ className={classes.join(' ')}>
      <Title size="2xl" $='h3' href={href}>{title}</Title>
      { quote && 
        <Quote size='lg'>
          {quote}
        </Quote>
      }
      <Text size='md' opacity={80}>{body}</Text>
    </$>
  )
}

export default Card