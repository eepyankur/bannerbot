"use client";

import type React from "react";
import { GlobalContextProvider } from "./_services/GlobalContextProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>;
}
