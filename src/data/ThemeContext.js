import { createContext, useState } from "react";

export const themeChangeTransition = "transition-all duration-1000 ease-linear";
export const themeChangeDuration = 1;
export const ThemeContext = createContext();
export const ThemeProvider = ThemeContext.Provider;
