import {Project} from "./types";

export async function fetchProjects(): Promise<Array<Project>> {
	const response = await fetch(
		"https://raw.githubusercontent.com/ajkachnic/myself/main/projects.json",
	);
	const text = await response.text();
	if (response.ok) {
		const json = JSON.parse(text);
		return (json as Array<Project>);
	} else {
		throw new Error(text);
	}
}
