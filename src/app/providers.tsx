'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    // Nest NextUIProvider inside ThemeProvider
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ThemeProvider>
  );
}
