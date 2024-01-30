/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';

export function reportAccessibility(): void {
  const isServerSideRendered = () => {
    return typeof window === 'undefined';
  };

  if (process.env.NODE_ENV !== 'production' && !isServerSideRendered()) {
    import('react-dom').then((ReactDOM) => {
      import('@axe-core/react').then((axe) => {
        axe.default(React, ReactDOM, 1000, {});
      });
    });
  }
}
