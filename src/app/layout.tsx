import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Om Vatika Guest House - Premium Accommodation & Banquet Services",
  description: "Experience luxury and comfort at Om Vatika Guest House. Offering premium rooms, modern amenities, and elegant banquet services for your special occasions.",
  keywords: "guest house, accommodation, banquet hall, Om Vatika, luxury stay, hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
