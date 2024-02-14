'use client';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const userMenu = [
  { label: 'profile' },
  { label: 'Cerrar Sesion', path: '/api/auth/logout' },
];

export function UserActions() {
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          size="sm"
          src={user ? user.picture ?? undefined : undefined}
          alt={`${user?.family_name} picture`}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Menu de usuario"
        items={userMenu}
        onAction={(s) => {
          const item = userMenu.find((x) => s.toString() === x.label);
          if (item) {
            router.push(item.path ?? '/');
          }
        }}
      >
        {(x) =>
          x.label === 'profile' ? (
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Registrado como</p>
              <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
          ) : (
            <DropdownItem key={x.label}>{x.label}</DropdownItem>
          )
        }
      </DropdownMenu>
    </Dropdown>
  );
}
