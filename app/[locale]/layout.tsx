
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio",
  description: "portfolio, Enrico Nipper",
};
 


export default async function RootLayout({
  children,
  params:{locale},
}: Readonly<{
  children: React.ReactNode;
  params:{locale: string}
}>) {

  const messages = await getMessages();
  
  return (
    <html lang={locale}>

      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        {children}
         </NextIntlClientProvider>
        </body>
    </html>
  );
}
