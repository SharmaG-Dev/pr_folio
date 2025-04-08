import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Mrnow | Mr Full stack Developer",
  description: "Mr Full Stack Developer",
  icons: {
    icon: "/favicon.ico", 
  },
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
