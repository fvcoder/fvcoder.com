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

import { UserActions } from './user.navbar';

const content = [
  {
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'Acerca de',
    url: '/#sobre-mi',
  },
  {
    label: 'Contacto',
    url: '/#contacto',
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();

  return (
    <NavbarUi
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      position="static"
      maxWidth="md"
      className="bg-transparent"
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
        {content.slice(0, 3).map((item, index) => (
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
              Iniciar Sesión
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {content.map((item, index) => (
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
