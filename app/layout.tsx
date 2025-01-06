import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Josh Breite",
  description: "Josh Breite's personal website",
  icons: {
    icon: "/simpleIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-start py-6 px-6 sm:py-16">
          <div className="max-w-xl w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
