'use client';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux';
import { reportAccessibility } from '@/utils/reportAccessibility';

export function Providers({ children }: { children: React.ReactNode }) {
  reportAccessibility();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  );
}
