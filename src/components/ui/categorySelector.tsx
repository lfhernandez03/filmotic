import React, {useState} from 'react'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    const [selectedCategory, setSelectedCategory] = useState("all")

    return (
      <div className="w-full overflow-x-auto py-4">
        <div className="flex space-x-2 min-w-max px-2">
          {categories.map((category) => (
            <Button
              key={category.genreId[0]}
              variant="outline"
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 transition-all",
                selectedCategory === category.genreId[0].toString()
                  ? `${category.color} border-2 border-slate-400 shadow-md`
                  : "bg-white hover:bg-slate-100",
              )}
              onClick={() => setSelectedCategory(category.genreId[0].toString())}
            >
              <span className="text-xl">{category.emoji}</span>
              <span className="font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
  )
}

export default CategorySelector