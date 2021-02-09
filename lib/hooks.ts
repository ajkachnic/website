import * as Panelbear from "@panelbear/panelbear-js";
import {useRouter} from "next/router";
import {useEffect} from "react";

export function usePanelbear(site: string, config = {}) {
	const router = useRouter();

	useEffect(
		() => {
			Panelbear.load(site, config);

			// Trigger initial page view
			Panelbear.trackPageview();

			// Add on route change handler for client-side navigation
			function handleRouteChange() {
				return Panelbear.trackPageview();
			}
			router.events.on("routeChangeComplete", handleRouteChange);

			return () => {
				router.events.off("routeChangeComplete", handleRouteChange);
			};
		},
		[],
	);
}
