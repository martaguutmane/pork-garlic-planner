import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pork & Garlic — Winter Strategy Planner",
  description: "Compare Winter profit, cash and sales allocation scenarios.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
