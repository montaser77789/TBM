import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TBM | GCC Destinations & Tourism Marketing Experts",
  description:
    "TBM connects world-class destinations with the vibrant GCC travel market — delivering tailored marketing strategies, destination branding, and tourism promotion across the Gulf region.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "GCC tourism marketing",
    "destination marketing",
    "travel promotion",
    "TBM",
    "Gulf tourism",
    "Middle East travel",
    "destination branding",
    "tourism strategy",
    "travel agency marketing",
    "B2B travel solutions",
  ],
  openGraph: {
    title: "TBM | Connecting Global Destinations with GCC Travelers",
    description:
      "Your trusted partner for destination marketing and tourism promotion across the Gulf region.",
    url: "https://yourdomain.com",
    siteName: "TBM",
    images: [
      {
        url: "/og-image.jpg", // ضع هنا صورة مناسبة تظهر عند مشاركة الرابط
        width: 1200,
        height: 630,
        alt: "TBM - GCC Travel Market",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TBM | GCC Destinations Marketing & Promotion",
    description:
      "Promoting global destinations across the GCC travel market with innovative marketing strategies.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} font-cairo antialiased`}>
        {children}
      </body>
    </html>
  );
}