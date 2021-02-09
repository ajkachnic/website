import { Project } from "./types";

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch('https://raw.githubusercontent.com/ajkachnic/myself/main/projects.json')
  const text = await response.text()
  if(!response.ok) {
    throw new Error(text)
  } else {
    const json = JSON.parse(text)
    return json as Project[]
  }
}