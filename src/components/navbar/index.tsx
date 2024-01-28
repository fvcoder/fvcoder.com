'use client';
import {
  Button,
  Link as LinkUi,
  Navbar as NavbarUi,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

import { useAppSelector } from '@/redux';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbar = useAppSelector((x) => x.navbar);

  return (
    <NavbarUi onMenuOpenChange={setIsMenuOpen} {...navbar.style}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={'/'}>
            <p className="font-bold text-inherit">fvcoder</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbar.content.slice(0, 3).map((item, index) => (
          <NavbarItem key={`${item.url}-${index}`}>
            <LinkUi as={Link} color="foreground" href={item.url}>
              {item.label}
            </LinkUi>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" size="sm">
            Iniciar Sesion
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navbar.content.map((item, index) => (
          <NavbarMenuItem key={`${item.url}-menu-${index}`}>
            <LinkUi
              as={Link}
              color="foreground"
              className="w-full"
              href={item.url}
              size="lg"
            >
              {item.label}
            </LinkUi>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUi>
  );
}
