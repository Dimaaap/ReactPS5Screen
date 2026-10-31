import { Swiper, SwiperSlide } from "swiper/react";
import { GAMES_DATA } from "../../data/games.data";
import { GameItem } from "./game-item/GameItem";

import "swiper/css";

export function GameCarousel() {
    return <div>
        <Swiper
            slidesPerView={8}
            spaceBetween={18}
            loop
        >
            { GAMES_DATA.map((game) => (
                <SwiperSlide key={ game.slug }>
                    <GameItem game={game}  />
                </SwiperSlide>
                
            )) }
        </Swiper>
    </div>
}