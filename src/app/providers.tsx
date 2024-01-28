'use client';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';

import { store } from '@/redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}
