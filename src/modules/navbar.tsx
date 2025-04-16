import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky flex justify-between items-center z-50 top-0 w-full px-4 py-2 bg-white/80 shadow-md">
      <header>
        <Link href={"/"} className="font-bold text-gray-800">
          <span>Filmotic</span>
        </Link>
      </header>
      {/* Mobile menu button for smaller screens */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {/* Desktop navigation for bigger screens */}
      <nav className="hidden md:flex md:items-center md:gap-4">
        <ul className="flex gap-4">
          <li>
            <Link href={"/"} className="text-gray-600 hover:text-gray-800">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href={"/movies"}
              className="text-gray-600 hover:text-gray-800"
            >
              Favoritos
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile navigation for smaller screens */}
      <div
        className={cn(
          "fixed top-12 right-0 w-[75%] bg-white border-b shadow-lg md:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <nav className="container flex flex-col py-4 gap-2">
          <ul className="flex flex-col gap-1 px-4">
            <li className="w-full">
              <Link
                href="/"
                className="w-full flex justify-end px-4 py-2 hover:bg-slate-100 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/favorites"
                className="w-full flex justify-end items-center gap-2 px-4 py-2 hover:bg-slate-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="h-4 w-4" />
                Favoritos
              </Link>
            </li>
          </ul>

          <div className="px-4 pt-2">
            <Button className="w-full">Iniciar Sesión</Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
