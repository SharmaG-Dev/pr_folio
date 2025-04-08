"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Copyright from "@/components/copyright";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      {children}
      <Footer />
      <Copyright />
    </ThemeProvider>
  );
}
