import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "پنل آروین ویرا",
  description: "پنل آروین ویرا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="antialiased"
      >
        <div className="root">
          {children}
        </div>
      </body>
    </html >
  );
}
