import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BasicNav from "./_components/BasicNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Start",
  description: "一个使用 Next.js、TypeScript 和 Tailwind CSS 的项目",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BasicNav />
        {children}
      </body>
    </html>
  );
}
