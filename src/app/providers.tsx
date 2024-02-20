//use client may be needed
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ThemeProvider>
  );
}
