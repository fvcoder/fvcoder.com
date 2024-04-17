/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

interface UserMenu {
  label: string;
  path?: string;
  action?: () => void;
}

const userMenu: UserMenu[] = [
  { label: 'profile' },
  {
    label: 'Cerrar Sesion',
    action: () => {
      void signOut();
    },
  },
];

interface UserActionsProps {
  session: Session;
}

export function UserActions(props: UserActionsProps) {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          size="sm"
          src={props.session.user?.image ?? undefined}
          name={props.session.user?.name ?? undefined}
          alt={`${props.session.user?.name} picture`}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Menu de usuario"
        items={userMenu}
        onAction={(s) => {
          const item = userMenu.find((x) => s.toString() === x.label);
          if (item) {
            if (item.path) {
              router.push(item.path);
            }
            if (item.action) {
              item.action();
            }
          }
        }}
      >
        {(x) =>
          x.label === 'profile' ? (
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Registrado como</p>
              <p className="font-semibold">{props.session.user?.email}</p>
            </DropdownItem>
          ) : (
            <DropdownItem key={x.label}>{x.label}</DropdownItem>
          )
        }
      </DropdownMenu>
    </Dropdown>
  );
}
