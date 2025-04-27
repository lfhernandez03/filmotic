import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, House, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="w-full border-b border-gray-200 shadow-sm">
        <div className="sticky flex justify-between items-center z-50 top-0 w-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-2 md:text-sm">
          {/* Título de la aplicación */}
          <Link href={"/"} className="font-bold text-primary-text">
            <span>Filmotic</span>
          </Link>

          {/* Botón para menú en pantallas pequeñas */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Navegación en pantallas grandes */}
          <nav className="hidden md:flex md:items-center md:gap-4">
            <ul className="flex gap-4">
              <li>
                <Link
                  href={"/"}
                  className="text-primary-text hover:text-primary-hover"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href={"/movies"}
                  className="text-primary-text hover:text-primary-hover "
                >
                  Favoritos
                </Link>
              </li>
            </ul>
            <div>
              <Button 
                variant="default"
                >
                Iniciar Sesión
              </Button>
            </div>
          </nav>

          {/* Overlay para el menú en pantallas pequeñas */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu} // Cierra el menú al hacer clic en el fondo
            ></div>
          )}

          {/* Navegación para pantallas pequeñas */}
          <div
            className={cn(
              "fixed top-0 right-0 w-[75%] h-full z-50 bg-white border-l shadow-lg md:hidden transition-all duration-300 ease-in-out transform",
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
            )}
          >
            <nav className="container flex flex-col h-full py-4 gap-2">
              <ul className="flex flex-col gap-1 px-4">
                <li className="w-full">
                  <Link
                    href="/"
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 hover:bg-blue-50 rounded-md text-center"
                    onClick={toggleMenu}
                  >
                    <House className="h-4 w-4" />
                    Inicio
                  </Link>
                </li>
                <span>
                  <hr className="border-gray-300 " />
                </span>
                <li className="w-full">
                  <Link
                    href="/favorites"
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 hover:bg-blue-50 rounded-md"
                    onClick={toggleMenu}
                  >
                    <Heart className="h-4 w-4" />
                    Favoritos
                  </Link>
                </li>
                <hr className="border-gray-300" />
              </ul>
              <div className="mt-auto px-4 py-4">
                <Button 
                variant="default"
                className="w-full">
                  Iniciar Sesión
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
