import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface HeaderNavbarProps {
  hiddenThemeSelector?: boolean;
  initialDarkMode?: boolean;
}

export function HeaderNavbar(props: HeaderNavbarProps) {
  const [isDarkMode, setDarkMode] = useState(props.initialDarkMode ?? false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = [
    { title: "Blog", href: "/blog" },
    { title: "Cursos", href: "/course" },
    { title: "Portfolio", href: "/project" },
  ];

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
            <Link className="w-full" color="foreground" href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
        {!props.hiddenThemeSelector && (
          <NavbarMenuItem>
            <Switch
              size="lg"
              onValueChange={setDarkMode}
              defaultChecked={isDarkMode}
              thumbIcon={({ isSelected, className }) => (
                <Icon
                  icon={
                    !isSelected
                      ? "fluent:weather-sunny-16-filled"
                      : "fluent:weather-moon-16-filled"
                  }
                  className={className}
                />
              )}
            />
          </NavbarMenuItem>
        )}
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
