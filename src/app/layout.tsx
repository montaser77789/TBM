import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "TBM | Travel Business Marketing",
  description:
    "Connecting world-class destinations with the dynamic GCC travel market.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        {children}
      </body>
    </html>
  );
}
