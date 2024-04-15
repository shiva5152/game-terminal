import { AppProvider } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login",
  description: " login page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const heads = headers();

  return (
    <html lang="en">
      <body>
        <AppProvider>
          <main className="flex items-start w-full bg-neutral-900 mx-auto ">
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
