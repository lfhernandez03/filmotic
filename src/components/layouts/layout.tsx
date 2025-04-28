import React from "react";
import { inter } from "@/styles/fonts";
import NavBar from "@/modules/navbar";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="es" data-theme="light">
        <Head>
          <meta
            name="description"
            content="Filmotic - Recomendador de películas emocionales"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={`${inter.className} antialiased `}>
          <div className="">
            <NavBar />
          </div>
          <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-12">
            {children}
          </div>
        </body>
      </html>
    </>
  );
}

