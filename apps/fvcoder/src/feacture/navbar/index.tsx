import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons"
import classNames from "classnames"
import { Root, Trigger, Portal, Overlay, Content, Close } from "@radix-ui/react-dialog"
import { buttonLink } from "../../style/button"
import { useState } from "react";
import { Navbar as NavbarRoot, Link, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { label: "Blog", href: "/blog" },
        { label: "Acerca de", href: "https://blog.fvcoder.com/quien-es-fernando-ticona-fvcoder/" },
    ]
 


    return (
        <NavbarRoot onMenuOpenChange={(open) => setIsMenuOpen(Boolean(open))}>
          <NavbarContent>
            <NavbarBrand>
                <a href="/" className="flex items-center gap-2">
                    <img src="/favicon-96x96.png" alt="fvcoder icon png" width={35} height={35} />
                    <span className="font-inter text-base font-normal">fvcoder</span>
                </a>
            </NavbarBrand>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            {links.map((x, i) => (
                <NavbarItem key={`navbar-item-${i}`}>
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

      return (
        <nav className="flex items-center justify-between px-4 py-2">
            <a href="/" className="flex items-center gap-2">
                <img src="/favicon-96x96.png" alt="fvcoder icon png" width={35} height={35} />
                <span className="font-inter text-base font-normal">fvcoder</span>
            </a>
            <Root>
                <Trigger asChild>
                    <button className="md:hidden p-3" aria-label="Toggle navigation">
                        <HamburgerMenuIcon className="w-6 h-6 text-[#050505] "/>
                    </button>
                </Trigger>
                <Portal>
                    <Overlay className="fixed inset-0 bg-black/20" />
                    <Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-4/5 h-4/5 bg-slate-50 rounded">
                        <header className="py-2 px-4 flex items-center justify-between">
                            <h2 className="text-xl">Menu</h2>
                            <Close asChild>
                                <button className="p-3">
                                    <Cross2Icon className="w-6 h-6 text-black/50" />
                                </button>
                            </Close>
                        </header>
                        <main>
                            {links.map(({ label, href }, i) => (
                                <a key={`link-dtd-${i}`} href={href} className={classNames(buttonLink, "w-full")}>{label}</a>
                            ))}
                        </main>
                    </Content>
                </Portal>
            </Root>
            <div className="hidden md:flex items-center gap-2">
                {links.map(({ label, href }, i) => (
                    <a key={`link-dtd-${i}`} href={href} className={buttonLink}>{label}</a>
                ))}
            </div>
        </nav>
    )
}
