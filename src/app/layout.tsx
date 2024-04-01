import { AppProvider } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import InitialLoad from "./components/ui/InitialLoad";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game Terminal",
  description: "Multiple Games, One Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heads = headers();

  const pathname = heads.get("next-url");
  // console.log(pathname);
  // flex flex-col relative overflow-x-hidden items-center w-full py-4 md:py-11 bg-neutral-900 mx-auto
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <InitialLoad>
            <main className="flex flex-col relative overflow-x-hidden items-center w-full bg-neutral-900 mx-auto ">
              {children}
            </main>
          </InitialLoad>
        </AppProvider>
      </body>
    </html>
  );
}
