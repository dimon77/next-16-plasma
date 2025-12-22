import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
// import "normalize.css/normalize.css";
import "../styles/fonts.scss";
import { PlasmaProvider } from "@/components/providers/PlasmaProvider";
import "./globals.scss";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "plasma title",
  description: "plasma description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        {/* <body
      className="abc"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        <PlasmaProvider>
          <Header />
          <main>{children}</main>
        </PlasmaProvider>
      </body>
    </html>
  );
}
