import React from "react";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import NavBar from "@/modules/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <div>
        <NavBar />
      </div>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
