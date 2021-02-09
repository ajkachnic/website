import {FC, PropsWithChildren} from "react";

type Props = PropsWithChildren<{}>;

const Section: FC<Props> = ({children}) =>
	<section>
		{children}
	</section>
;

export default Section;
