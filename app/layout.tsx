import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sermayakar",
  description: "YOUR TRUSTED REAL ESTATE PARTNER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'font-nexa'}>{children}</body>
    </html>
  );
}
