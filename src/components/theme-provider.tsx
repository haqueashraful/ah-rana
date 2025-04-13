"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
  );
}
