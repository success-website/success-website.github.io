import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://successengineering.in"),
  title: "Success Engineering Enterprises | Press & Precision Manufacturing Over 20 Years",
  description:
    "An ISO 9001:2015 certified company based in SIDCO Industrial Estate, Kakkalur, Tiruvallur, Tamil Nadu. Providing industrial welding, high-tonnage metal stamping, progressive press tools, and precision fabrication worldwide.",
  keywords: [
    "Success Engineering Enterprises",
    "Metal Fabrication Kakkalur",
    "Press Tools and Dies Chennai",
    "Precision Metal Stamping Tiruvallur",
    "ISO 9001:2015 Certified Metal Fabrication",
    "Automotive Stamping OEM Supplier",
    "SIDCO Industrial Estate",
  ],
  authors: [{ name: "Success Engineering Enterprises" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Success Engineering Enterprises | Precision Manufacturing",
    description:
      "Press and precision manufacturing company for over 20 years. ISO 9001:2015 certified by UCAS India Pvt. Ltd.",
    images: ["/images/Homepage_img.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-white text-zinc-900 selection:bg-[#D2251F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
