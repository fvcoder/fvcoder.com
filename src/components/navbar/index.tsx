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
  Spinner,
} from '@nextui-org/react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';

import { useAppSelector } from '@/redux';

import { UserActions } from './user.navbar';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();
  const navbar = useAppSelector((x) => x.navbar);

  return (
    <NavbarUi
      onMenuOpenChange={setIsMenuOpen}
      {...navbar.style}
      id="navbar-root"
    >
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
          {session.status === 'loading' ? (
            <Spinner size="sm" />
          ) : session.status === 'authenticated' ? (
            <UserActions session={session.data} />
          ) : (
            <Button
              color="primary"
              href="#"
              variant="flat"
              size="sm"
              onPress={() => {
                signIn('github').catch(() => {});
              }}
            >
              Iniciar Sesion
            </Button>
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
