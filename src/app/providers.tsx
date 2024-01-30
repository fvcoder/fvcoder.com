'use client';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';

import { store } from '@/redux';
import { reportAccessibility } from '@/utils/reportAccessibility';

export function Providers({ children }: { children: React.ReactNode }) {
  reportAccessibility();

  return (
    <NextUIProvider>
      <Provider store={store}>{children}</Provider>
    </NextUIProvider>
  );
}
