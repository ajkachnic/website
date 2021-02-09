import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { responsiveSize } from '../lib/adjust'
import { Size, Element } from '../lib/types'
import Link from 'next/link'

type Props = PropsWithChildren<{
  $?: Element,
  size?: Size,
  bg: 'accent' | 'gray',
  href?: string,
  onClick?: MouseEventHandler 
}>

const Button: FC<Props> = ({ 
  children, 
  $ = 'button', 
  size='lg', 
  bg = 'gray',
  href,
  onClick
}) => {
  const classes = [
    // General Appearance
    'font-bold', 
    'py-2', 
    'rounded-md',
    'shadow-md', 
    // Animations and state 
    'transform', 
    'transition', 
    'duration-150', 
    'hover:translate-y-1', 
    // Focus state
    'focus:ring-4', 
    'focus-outline-none',
    // Responsive spacing
    'lg:px-16',
    'md:px-8',
    'px-4'
 ]

 // Computed elements
  const colors = bg === "accent"
    ? ['bg-accent-600', 'hover:bg-accent-500', 'ring-accent-700', 'text-gray-dark']
    : ['bg-gray-50', 'hover:bg-gray-100', 'ring-gray-200', 'dark:bg-gray-900', 'dark:hover:bg-gray-800', 'dark:ring-gray-700', 'text-gray-dark', 'dark:text-gray-light']

  classes.push(responsiveSize(size))
  classes.push(...colors)

  const className = classes.join(' ')

  if(href) {
    return (
      <Link href={href}>
        <$ className={className} onClick={onClick}>
          {children}
        </$>
      </Link>
    )
  }
  return (
    <$ className={className} onClick={onClick}>
      {children}
    </$>
  )
}

export default Button