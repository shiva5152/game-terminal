import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/ui/wrapper";
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
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col overflow-x-hidden items-center w-full py-4 md:py-11 bg-neutral-900 mx-auto ">
          <Wrapper>
            <Header />
            {children}
            <Footer />
          </Wrapper>
        </main>
      </body>
    </html>
  );
}
