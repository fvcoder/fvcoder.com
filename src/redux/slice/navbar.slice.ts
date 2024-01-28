import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NavbarContext } from '@/types/context/navbar';

const initialState: NavbarContext = {
  content: [
    {
      label: 'Experiencia',
      url: '/experience',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'Sobre mi',
      url: '/#sobre-mi',
    },
    {
      label: 'Contacto',
      url: '/#contacto',
    },
  ],
  style: {
    isBlurred: false,
    position: 'static',
    maxWidth: 'md',
    className: 'bg-transparent',
  },
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbarContent: (
      state,
      action: PayloadAction<NavbarContext['content']>,
    ) => {
      state.content = action.payload;
    },
    setNavbarStyle: (
      state,
      action: PayloadAction<Partial<NavbarContext['style']>>,
    ) => {
      state.style = {
        ...state.style,
        ...action.payload,
      };
    },
  },
});

export const { setNavbarContent, setNavbarStyle } = navbarSlice.actions;
