import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { Color } from "../lib/types";
import Text, { TextProps } from './text'

type Props = PropsWithChildren<{
  href: string,
  active?: boolean
  variant?: 'subtle' | 'loud',
  target?: '_self' | '_blank' | '_parent' | '_top',
  rel?: 'noopener' | 'noreferrer'
}> & TextProps

const LinkComponent: FC<Props> = ({ 
  href, 
  children, 
  active = false,
  target = '_self',
  variant = 'subtle',
  rel = 'noopener',
  ...props
}) => {
  const classes = [
    'transition',
    'duration-150',
  ]

  if(active) classes.push('shadow-active')
  else { classes.push('opacity-80', 'hover:opacity-100') }
  let color: Color = undefined

  if(variant === 'loud'){
    color = {
      light: 'text-accent-600',
      dark: 'text-accent-400'
    }
  }

  return (
    <Link href={href}>
      <Text 
        className={classes.join(' ')} 
        color={color}
        weight={variant === 'loud' ? 'medium' : 'normal'}
        {...props}
        $='a'
        target={target}
        href={href}
        rel={rel}
      >
        {children}
      </Text>
    </Link>
  )
}

export default LinkComponent