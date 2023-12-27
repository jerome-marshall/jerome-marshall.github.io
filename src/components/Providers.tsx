"use client";

import React from "react";
import type { FC } from "react";
import { ThemeProvider } from "next-themes";
import PHProvider from "./PHProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <PHProvider>{children}</PHProvider>
    </ThemeProvider>
  );
};

export default Providers;
