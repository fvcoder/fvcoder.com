import { NavbarProps } from '@nextui-org/react';

export interface navbarContent {
  label: string;
  url: string;
}

export interface navbarStyle {
  position: NavbarProps['position'];
  className?: 'bg-transparent';
  isBlurred?: boolean;
  maxWidth?: NavbarProps['maxWidth'];
}

export interface NavbarContext {
  content: navbarContent[];
  style: navbarStyle;
}
