import { FC } from 'react'
import { Size, Element } from '../lib/types'

import Title from './title'
import Text from './text'
import Quote from './quote'
import Link from './link'

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
      <Link href={href} target='_blank'>
        <Title size="2xl" $='h3'>{title}</Title>
      </Link>
      { quote && 
        <Quote size='md'>
          {quote}
        </Quote>
      }
      <Text size='md' opacity={80}>{body}</Text>
    </$>
  )
}

export default Card