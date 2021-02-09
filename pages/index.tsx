import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Project} from "../lib/types";
import {FC} from "react";

import Container from "../components/container";
import Section from "../components/section";
import Title from "../components/title";
import Text from "../components/text";
import Button from "../components/button";
import Stack from "../components/stack";
import Spacer from "../components/spacer";
import Card from "../components/card";
import Grid from "../components/grid";
import Link from "../components/link";
import {fetchProjects} from "../lib/data";

type Page = FC<InferGetStaticPropsType<typeof getStaticProps>>;
const Index: Page = ({projects}) => {
	return <Container>
		<Section>
			<Title size="5xl" $="h1">
				Hey, I&apos;m Andrew Kachnic.
			</Title>
			<Text size="xl" opacity={80}>
				I&apos;m a young person at an unspecified age. I&apos;ve worked with TypeScript, Go, Rust, React, Vue, Svelte, etc in the past. Currently learning Haskell and functional programming. Working at
				<Link variant="loud" target="_blank" href="https://transloadit.com">
					Transloadit
				</Link>
			</Text>
			<Spacer size={2} />
			<Stack gap={8}>
				<Button bg="accent">
					Get in touch
				</Button>
			</Stack>
		</Section>
		<Spacer size={16} />
		<Section>
			<Title>
				Projects
			</Title>
			<Text size="md" opacity={80}>
				I have a tendency to work on conceptually stupid projects for my own enjoyment. So, I&rsquo;ve attempted to filter this down to the not-so-stupid ones.
			</Text>
			<Spacer size={8} />
			<Grid gap={8}>
				{projects.map((
					{
						name,
						description,
						tagline,
						github,
					},
					index,
				) =>
					<Card key={index}
					quote={tagline}
					title={name}
					body={description}
					href={github} />
				)}
			</Grid>
		</Section>
	</Container>;
};

export const getStaticProps: GetStaticProps<{
	projects: Array<Project>;
}> = async (context) => {
	const projects = await fetchProjects();
	return {
		props: {
			projects,
		},
		// Revalidate every 30 minutes
		revalidate: 60 * 30,
	};
};

export default Index;
