import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Pragya Tripathi |  Frontend Developer",
  description: "Frontend Developer",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-dark bg-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
