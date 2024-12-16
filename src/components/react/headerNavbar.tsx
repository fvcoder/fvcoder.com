import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
  } from "@nextui-org/react";
import { useState } from "react";
  

  
export function HeaderNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menu = [
        { title: "Blog", href: "/blog" },
        { title: "Portfolio", href: "/work" },
        { title: "Acerca de", href: "/about" },
    ]
  
    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          
          <NavbarBrand>
            <p className="font-bold text-inherit">Fernando Ticona</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menu.map((item, index) => (
            <NavbarItem key={`root-nv-${item.title}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={item.title}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="md:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>
        <NavbarMenu>
          {menu.map((item, index) => (
            <NavbarMenuItem key={`root-nv-sm-${item.title}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={item.title}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }