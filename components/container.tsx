import {FC, PropsWithChildren} from "react";

type Props = PropsWithChildren<{}>;

const Container: FC<Props> = ({children}) =>
	<main className="min-h-screen bg-gray-white dark:bg-gray-dark">
		<div className="md:container md:mx-auto px-4 lg:px-16 py-4 lg:py-16 bg-gray-white dark:bg-gray-dark">
			{children}
		</div>
	</main>
;

export default Container;
