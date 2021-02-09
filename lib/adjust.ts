import {Size, TextTracking} from "./types";

export function adjustSize(size: Size, factor: number): Size {
	const sizes: Array<Size> = [
		"xs",
		"sm",
		"md",
		"lg",
		"xl",
		"2xl",
		"3xl",
		"4xl",
		"5xl",
		"6xl",
		"7xl",
		"8xl",
		"9xl",
	];

	const index = sizes.indexOf(size);
	if (index < 0) {
		return size;
	}

	return sizes[index + factor] || "xs";
}

// export const adjustSpacing = (space: number, factor: number): number => {
//   const sizes: number[] = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96]

//   const index = sizes.indexOf(space)
//   if(index < 0) return space

//   return sizes[index + factor] || space + factor
// }

// Responsive text in a bottle
export function responsiveSize(size: Size): string {
	// Super tedious because of purgecss
	// I swear I don't normally write code like this
	// See: adjustSize()
	if (size === "9xl") {
		return "text-7xl md:text-8xl lg:text-9xl";
	}
	if (size === "8xl") {
		return "text-6xl md:text-7xl lg:text-8xl";
	}
	if (size === "7xl") {
		return "text-5xl md:text-6xl lg:text-7xl";
	}
	if (size === "6xl") {
		return "text-4xl md:text-5xl lg:text-6xl";
	}
	if (size === "5xl") {
		return "text-3xl md:text-4xl lg:text-5xl";
	}
	if (size === "4xl") {
		return "text-2xl md:text-3xl lg:text-4xl";
	}
	if (size === "3xl") {
		return "text-xl  md:text-2xl lg:text-3xl";
	}
	if (size === "2xl") {
		return "text-lg  md:text-xl  lg:text-2xl";
	}
	if (size === "xl") {
		return "text-md  md:text-lg  lg:text-xl";
	}
	if (size === "lg") {
		return "text-sm  md:text-md  lg:text-lg";
	}
	if (size === "md") {
		return "text-xs  md:text-sm  lg:text-md";
	}
	if (size === "xs") {
		return "text-xs lg:text-sm";
	}
	return "text-sm";
}

// export const responsiveSpacing = (property: string, space: number): string => {
//   const sm = adjustSpacing(space, -4)
//   const md = adjustSpacing(space, -2)

//   return `${property}-${sm} md:${property}-${md} lg:${property}-${space}`
// }

export function generateTracking(t: TextTracking): string {
	// i hate you with a passion purgecss
	if (t === "tighter") {
		return "tracking-tighter";
	}
	if (t === "tight") {
		return "tracking-tight";
	}
	if (t === "normal") {
		return "tracking-normal";
	}
	if (t === "wide") {
		return "tracking-wide";
	}
	if (t === "wider") {
		return "tracking-wider";
	}
	if (t === "widest") {
		return "tracking-widest";
	}
}
export function generateOpacity(o: 60 | 80 | 100): string {
	if (o === 60) {
		return "text-opacity-60";
	}
	if (o === 80) {
		return "text-opacity-80";
	}
	if (o === 100) {
		return "text-opacity-100";
	}
}
