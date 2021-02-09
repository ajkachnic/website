import { FC, PropsWithChildren } from 'react'
import { generateOpacity, generateTracking, responsiveSize } from '../lib/adjust'
import { Color, FontWeight, LineHeight, Size, TextElement, TextTracking, UserSelect } from '../lib/types'

export type TextProps = PropsWithChildren<{
  $?: TextElement,
  // Some omitted
  weight?: FontWeight
  size?: Size,
  opacity?: 60 | 80 | 100,
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
  color = {
    dark: 'dark:text-gray-light',
    light: 'text-gray-dark'
  },
  ...props
}) => {
  const classes = [
    `font-${weight}`,
    color.light,
    color.dark,
    // Letter spacing
    generateTracking(tracking),
    // Line spacing
    `leading-${leading}`,
    // user-select
    `select-${select}`,
    // Little bit of padding
    `py-2`,
  ]
  
  // Don't override variables
  opacity && classes.push(generateOpacity(opacity))

  size && classes.push(responsiveSize(size))

  classes.push(...className.split(' '))

  return (
    <$ className={classes.join(' ')} {...props}>
      {children}
    </$>
  )
}

export default Text