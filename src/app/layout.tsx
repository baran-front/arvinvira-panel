import type { Metadata } from "next";

import "./globals.css";
import { Toast } from "@base-ui-components/react";
import ToastList from "@/components/templates/toastList/toastList";

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
        <Toast.Provider>
          <div className="root">
            {children}
          </div>

          <Toast.Portal>
            <Toast.Viewport className={"fixed w-96 bottom-3 left-3 top-auto"}>
              <ToastList />
            </Toast.Viewport>
          </Toast.Portal>
        </Toast.Provider>
      </body>
    </html >
  );
}
