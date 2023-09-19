import { useState } from "react";
import { Navbar as NavbarRoot, Link, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: "Proyectos", href: "/project" },
        { label: "Blog", href: "/blog" },
        { label: "Certificados", href: "/certificates" },
        { label: "Acerca de", href: "/about" },
    ]

    return (
        <NavbarRoot onMenuOpenChange={(open) => setIsMenuOpen(Boolean(open))}>
          <NavbarContent>
            <NavbarBrand>
                <a href="/" className="flex items-center gap-2" aria-label="fvcoder logo">
                    <img src="/favicon-96x96.png" alt="fvcoder icon png" width={35} height={35} />
                    <span className="font-inter text-base font-normal">fvcoder</span>
                </a>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="nv-menu sm:hidden"
            />
          </NavbarContent>
    
          <NavbarContent className="nv-menu hidden sm:flex gap-4" justify="end">
            {links.map((x, i) => (
                <NavbarItem key={`navbar-item-${i}`} className={`nv-link-${i+1}`}>
                    <Link color="foreground" href={x.href}>
                        {x.label}
                    </Link>
                </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarMenu>
            {links.map((item, index) => (
              <NavbarMenuItem key={`nav-item-menu-${item}-${index}`}>
                <Link
                    color="foreground"
                  className="w-full"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarRoot>
    );
}
