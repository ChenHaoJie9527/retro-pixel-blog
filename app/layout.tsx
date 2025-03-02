import type { Metadata } from "next";
import localFont from "next/font/local";
import { Press_Start_2P, VT323 } from "next/font/google"
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
  description: "Retro Pixel Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2p.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
