import type { PropsWithChildren } from "react";

import { AppFooter } from "../components/footer";
import { AppNavbar } from "../components/navbar";

export function AppLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<AppNavbar />
			{children}
			<AppFooter />
		</>
	);
}
