import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";

import { ModalProvider } from "@/providers/modal-provider";
import prismadb from "@/lib/prismadb";
import { ToasterProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard for Beauty Kids Wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
          </header>
          <main>
            <ToasterProvider/>
            <ModalProvider/> 
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
