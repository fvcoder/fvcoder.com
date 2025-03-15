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
    Switch,
  } from "@heroui/react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react"  

export function HeaderNavbar() {
  const [isDarkMode, setDarkMode] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { title: "Blog", href: "/blog" },
    { title: "Portfolio", href: "/project" },
  ]

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

  }, [isDarkMode])
  
  return (
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarBrand as="a" href="/?ref=navbar">
            <p className="font-bold text-inherit">Fernando Ticona</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {menu.map((item, index) => (
            <NavbarItem key={`root-nv-${item.title}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={item.href}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
          <NavbarMenuItem>
            <Switch
              size="lg"
              onValueChange={setDarkMode}
              thumbIcon={({isSelected, className}) => {

                return <Icon icon={!isSelected ? "fluent:weather-sunny-16-filled" : "fluent:weather-moon-16-filled"} className={className} />
              }
              }
            />
          </NavbarMenuItem>
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
                href={item.href}
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