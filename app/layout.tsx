import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from './components/BootstrapClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stafoo",
  description: "Stafoo is a platform for managing your staffmembers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}</body>
      <BootstrapClient />
    </html>
  );
}
