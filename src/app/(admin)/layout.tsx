import { AppProvider } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import InitialLoad from "../components/ui/InitialLoad";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import Sidebar from "../components/admin/sidebar/Sidebar";
import Header from "../components/admin/DashHeader";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin panel for Game Terminal",
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
          <InitialLoad>
            <main className="flex items-start w-full bg-neutral-900 mx-auto ">
              <div className="w-[25%]">
                <Sidebar />
              </div>
              <div className="w-[85%] flex flex-col justify-center items-center">
                <Header />
                {children}
              </div>
            </main>
          </InitialLoad>
        </AppProvider>
      </body>
    </html>
  );
}
