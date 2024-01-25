"use client";
import {
	Button,
	Navbar as NavbarUi,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

const navItems = [
	{
		title: "Experiencia",
		label: "experiencia",
		url: "/#experiencia",
	},
	{
		title: "Sobre mí",
		label: "sobre-mi",
		url: "/#sobre-mi",
	},
	{
		title: "Contacto",
		label: "contacto",
		url: "/#contacto",
	},
];
export function Navbar() {
	return (
		<header>
			<NavbarUi maxWidth="md" className="bg-transparent" isBlurred={false}>
				<NavbarBrand>
					<Link href={"/"}>
						<p className="font-bold text-inherit">fvcoder</p>
					</Link>
				</NavbarBrand>
				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					{navItems.map((x, i) => (
						<NavbarItem key={`nv-default-${i}`}>
							<Link href={x.url}>{x.title}</Link>
						</NavbarItem>
					))}
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem>
						<Button as={Link} size="sm" color="primary" href="/auth/signin" variant="flat">
							Iniciar Sesion
						</Button>
					</NavbarItem>
				</NavbarContent>
			</NavbarUi>
		</header>
	);
}
