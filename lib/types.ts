export type Size =
	| "xs"
	| "sm"
	| "md"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl"
	| "8xl"
	| "9xl";
export type TextElement =
	| "span"
	| "p"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "a"
	| "q"
	| "blockquote";
export type ContainerElement = "main" | "section" | "div" | "footer" | "button";

export type Element = TextElement | ContainerElement;

export type FontWeight =
	| "thin"
	| "light"
	| "normal"
	| "medium"
	| "bold"
	| "black";
export type TextTracking =
	| "tighter"
	| "tight"
	| "normal"
	| "wide"
	| "wider"
	| "widest";
export type LineHeight =
	| number
	| "none"
	| "snug"
	| "normal"
	| "relaxed"
	| "loose";
export type UserSelect = "none" | "text" | "all" | "auto";

export interface Color {
	dark: string;
	light: string;
}

export interface Collaborator {
	name: string;
	href: string;
}

export interface Project {
	name: string;
	description: string;
	tagline: string;
	github: string;
	collaborators: Array<Collaborator>;
}
