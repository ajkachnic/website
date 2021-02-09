import { FC, PropsWithChildren } from 'react'
import { adjustSize, responsiveSize } from '../lib/adjust'
import { Color, FontWeight, LineHeight, Size, TextElement, TextTracking, UserSelect } from '../lib/types'

export type TextProps = PropsWithChildren<{
  $?: TextElement,
  // Some omitted
  weight?: FontWeight
  size?: Size,
  opacity?: number,
  tracking?: TextTracking,
  leading?: LineHeight,
  select?: UserSelect,
  href?: string,
  className?: string,
  color?: Color
}> & {
  [key: string]: unknown
}

const Text: FC<TextProps> = ({ 
  children, 
  $ = 'p', 
  size, 
  weight = 'normal', 
  opacity, 
  tracking = 'normal',
  leading = 'normal',
  select = 'text',
  className = '',
  href = '',
  color = {
    dark: 'gray-light',
    light: 'gray-dark'
  },
  ...props
}) => {
  const classes = [
    `font-${weight}`,
    `text-${color.light}`,
    `dark:text-${color.dark}`,
    // Letter spacing
    `tracking-${tracking}`,
    // Line spacing
    `leading-${leading}`,
    // user-select
    `select-${select}`,
    // Little bit of padding
    `py-2`,
  ]
  
  // Don't override variables
  opacity && classes.push(`text-opacity-${opacity}`)

  size && classes.push(responsiveSize(size))

  classes.push(...className.split(' '))

  return (
    <$ className={classes.join(' ')} href={href} {...props}>
      {children}
    </$>
  )
}

export default Text