import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBA Review PoC",
  description:
    "Demo project for comparing AI code review tools on pull requests",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
