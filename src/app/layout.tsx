import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/utils/FooterWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogfolio",
  description: "Prakash's Home page on the Internet, portfoio and blog",
};

// need to change
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
