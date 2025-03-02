import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import PixelatedBackground from "components/PixelatedBackground";
import ColorfulPixelLogo from "components/ColorfulPixelLogo";
import BlinkingCursor from "components/BlinkingCursor";
import NavMenu from "components/NavMenu";
import ThemeToggle from "components/ThemeToggle";

import "./globals.css";

const pressStart2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Retro Pixel Blog",
  description: "Tech, Art, and Finance tips with a retro twist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2p.variable} ${vt323.variable} font-sans 
          dark:bg-gray-900 dark:text-green-400 
          bg-blue-50 text-indigo-800`}
      >
        <PixelatedBackground />
        <div className="max-w-4xl mx-auto px-4">
          <header className="py-8 flex flex-col items-center">
            {/* 快速变化： 500ms变化一次 200ms过渡 */}
            <ColorfulPixelLogo frameInterval={800} transitionDuration={200} />
            <h1 className="text-4xl font-bold text-center font-pixel mb-2">
              Pixel Blog
            </h1>
            <p className="text-xl text-center font-mono flex items-center">
              <span>Tech • Art • Finance</span>
              <BlinkingCursor />
            </p>
            <NavMenu />
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </header>
          <main>{children}</main>
          <footer className="py-8 text-center font-mono dark:text-green-400 text-indigo-800">
            © 2025 Pixel Wisdom. All rights pixelated.
          </footer>
        </div>
      </body>
    </html>
  );
}
