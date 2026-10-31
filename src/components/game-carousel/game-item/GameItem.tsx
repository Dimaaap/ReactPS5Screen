import type { TGame } from "../../../data/games.data";

import cn from "clsx"

interface Props {
    game: TGame
}

export function GameItem({ game }: Props) {
    return <button>
        <div className={cn('p-0.5 border-2 border-transparent transition-colors duration-300 ease-in-out')}>
            <img src={game.coverImage} alt={game.title} className="w-44 h-44 object-cover transition-all 
            duration-300 ease-in-out" />    
        </div>
        
        <div className="mt-2">
            <img src={game.platform === "PS5" ? "/ps5.png" : "/ps4.png"}
            alt={game.platform} width={60} className="fitler brightness-0 invert opacity-70 fadeIn hidden" />
        </div> 
    </button>
}