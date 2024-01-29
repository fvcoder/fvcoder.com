'use client';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
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
  Spinner,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

import { useAppSelector } from '@/redux';

import { UserActions } from './user.navbar';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbar = useAppSelector((x) => x.navbar);
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

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
          {isLoading ? (
            <Spinner size="sm" />
          ) : isAuthenticated ? (
            <UserActions />
          ) : (
            <LoginLink>
              <Button color="primary" href="#" variant="flat" size="sm">
                Iniciar Sesion
              </Button>
            </LoginLink>
          )}
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
