"use client";

import { ReactNode } from "react";
import { DeviceThemeProvider } from "@salutejs/plasma-ui/components/Device";
import { SSRProvider } from "@salutejs/plasma-ui/components/SSRProvider";
import { GlobalStyle } from "./GlobalStyle";

export function PlasmaProvider({ children }: { children: ReactNode }) {
  return (
    <DeviceThemeProvider>
      <SSRProvider>
        {children}
        <GlobalStyle />
      </SSRProvider>
    </DeviceThemeProvider>
  );
}
