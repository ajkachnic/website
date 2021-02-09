import { Size } from "./types";

export const adjustSize = (size: Size, factor: number): Size => {
  const sizes: Size[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']

  const index = sizes.indexOf(size)
  if(index < 0) return size

  return sizes[index + factor] || 'xs'
}

export const adjustSpacing = (space: number, factor: number): number => {
  const sizes: number[] = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]

  const index = sizes.indexOf(space)
  if(index < 0) return space

  return sizes[index + factor] || space + factor
}

// Responsive text in a bottle
export const responsiveSize = (size: Size): string => {
  const sm = adjustSize(size, -2)
  const md = adjustSize(size, -1)

  return`text-${sm} md:text-${md} lg:text-${size}`
}

export const responsiveSpacing = (property: string, space: number): string => {
  const sm = adjustSpacing(space, -4)
  const md = adjustSpacing(space, -2)

  return `${property}-${sm} md:${property}-${md} lg:${property}-${space}`
}