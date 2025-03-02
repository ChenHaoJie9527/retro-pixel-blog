import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import PixelatedBackground from "components/PixelatedBackground";
import ColorfulPixelLogo from "components/ColorfulPixelLogo";
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
        className={`${pressStart2p.variable} ${vt323.variable} font-sans bg-gray-900 text-gray-400 dark:bg-gray-900 dark:text-green-400`}
      >
        <PixelatedBackground />
        <div className="max-w-4xl mx-auto px-4">
          <header className="py-8 flex flex-col items-center">
            {/* 快速变化： 500ms变化一次 200ms过渡 */}
            <ColorfulPixelLogo frameInterval={800} transitionDuration={200} />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
