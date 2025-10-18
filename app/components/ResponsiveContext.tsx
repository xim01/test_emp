"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

interface ResponsiveContextType {
  isDesktop: boolean;
  isMobile: boolean;
  mounted: boolean; // чтобы знать, что клиент замонтирован
}

const ResponsiveContext = createContext<ResponsiveContextType>({
  isDesktop: false,
  isMobile: false,
  mounted: false,
});

export const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 1918 });
  const isMobile = useMediaQuery({ maxWidth: 1917 });

  // После монтирования клиента ставим mounted = true
  useEffect(() => setMounted(true), []);

  return <ResponsiveContext.Provider value={{ isDesktop, isMobile, mounted }}>{children}</ResponsiveContext.Provider>;
};

export const useResponsive = () => useContext(ResponsiveContext);
