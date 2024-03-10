import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Wrapper from "./components/ui/wrapper";
import "./globals.css";
import { headers } from "next/headers";
import NewHero from "./components/NewHero";

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
        <main className="flex flex-col relative overflow-x-hidden items-center w-full bg-neutral-900 mx-auto ">
          <NewHero />
          <Wrapper>
            {/* <Header /> */}
            {children}
            <Footer />
          </Wrapper>
        </main>
      </body>
    </html>
  );
}
