import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "3D Viewer • Neo Brutal",
    template: "%s • 3D Viewer",
  },
  description: "An experimental neo‑brutalist 3D + AR model viewer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brutal-bg min-h-screen flex flex-col`}>
        <NavBar />
        <div className="flex-1">
          {children}
        </div>
        <footer className="mt-12 py-8 text-center text-xs opacity-70 font-mono">
          <span>© {new Date().getFullYear()} 3D Viewer • Neo Brutal Theme</span>
        </footer>
      </body>
    </html>
  );
}
