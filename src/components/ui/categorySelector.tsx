import React from 'react'
import { Button } from "@/components/ui/button";

type Category = {
    genreId: Array<number>;
    name: string;
    emoji: string;
    color: string;
}

const categories: Category[] = [
    { genreId: [35], name: "Todas", emoji: "🎬", color: "bg-slate-200 hover:bg-slate-300" },
    { genreId: [18], name: "Para reír", emoji: "😂", color: "bg-yellow-200 hover:bg-yellow-300" },
    { genreId: [99], name: "Para llorar", emoji: "💔", color: "bg-blue-200 hover:bg-blue-300" },
    { genreId: [12], name: "Para pensar", emoji: "🧠", color: "bg-purple-200 hover:bg-purple-300" },
    { genreId: [12], name: "Épicas", emoji: "⚔️", color: "bg-red-200 hover:bg-red-300" },
    { genreId: [10402], name: "Musicales", emoji: "🎶", color: "bg-green-200 hover:bg-green-300" },
  ]

const CategorySelector = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Selecciona una categoría</h2>
        <div className="flex flex-wrap gap-4">
            <Button className="px-4 py-2 border-2 bg-white text-black border-slate-400 shadow-md rounded-full hover:bg-blue-50">Acción</Button>
        </div>
    </div>
  )
}

export default CategorySelector