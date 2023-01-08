import { useLocation } from "@remix-run/react";
import { Navbar } from "flowbite-react";

import LogoImg from "~/assets/icon-48x48.png";

import { appNavbarLinks } from "../data/navbar.links";

export function AppNavbar() {
	const l = useLocation();

	return (
		<Navbar fluid rounded>
			<Navbar.Brand href="/">
				<img src={LogoImg} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Fvcoder
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{appNavbarLinks.map((x, i) => (
					<Navbar.Link href={x.to} active={l.pathname.startsWith(x.to)} key={`navbar-link-${i}`}>
						{x.label}
					</Navbar.Link>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
}
