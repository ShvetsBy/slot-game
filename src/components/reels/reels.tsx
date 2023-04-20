import React from 'react';
import './reels.css'
import {  Stage,
    PixiComponent,
    Container,
    AnimatedSprite,
    useApp,
    useTick, 
    Sprite} from '@pixi/react';
import { cardsData } from '../../content/cards';
import ACard from '../../assets/cards/a-card.png';
import JCard from '../../assets/cards/j-card.png';
import KCard from '../../assets/cards/k-card.png';
import QCard from '../../assets/cards/q-card.png';
import Flamingo from '../../assets/cards/flamingo-card.png';
import Plane from '../../assets/cards/plane-card.png';
import FreeSpins from '../../assets/cards/free-spins.png';
import CatchMe from '../../assets/cards/catch-card.png';
import Gun from '../../assets/cards/gun-card.png';
import WalkieTalkie from '../../assets/cards/walkie-talkie.png';
import Jerk from '../../assets/cards/jerk-card.png';
import Girl from '../../assets/cards/girl-card.png';
import WildCard from '../../assets/cards/wild-card.png';
import WildFire from '../../assets/cards/wild-fire.png';


const cardsImg = {
    ACard, JCard, KCard, QCard, Flamingo, Plane, FreeSpins, CatchMe, Gun, WalkieTalkie, WildCard, WildFire, Jerk, Girl
}

export type reelPosition = {
    x: number
}


export const Reels = () => {
    const SYMBOL_WIDTH = 144;
    const SYMBOL_HEIGHT = 196;
    const REELS_QUANTITY = 5;
    const SYMBOLS_QUANTITY = 3;

    const ReelContainer = (props) => {
        const x = props.x;
        const shuffledReel = cardsData
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

        return(
            <Container width={SYMBOL_WIDTH} x={x}>
               {shuffledReel.map((el, i) => 
                <Sprite
                image={cardsImg[el.name]}
                y={i * SYMBOL_HEIGHT }
                key={el.id}
                />) }
            </Container>
        )
    }

    const ReelsContainer = () => {
        const row: Array<reelPosition> = [];
        for(let i = 0; i < REELS_QUANTITY; i++){
            const reelPosition =  i * SYMBOL_WIDTH;
            const item: reelPosition = {
                x: 0
            };
            item.x = reelPosition;
            row.push(item);
        }

        return(
         <>
          {row.map((el, i) => 
                <ReelContainer x={el.x} key={i}/> )}
         </>
              
         
        )
    }

    const ReelsContainerWrapper = () => {
        return(
            <Container width={SYMBOL_WIDTH * REELS_QUANTITY} height={SYMBOL_HEIGHT * SYMBOLS_QUANTITY} x={152} y={25}>
                <ReelsContainer />
            </Container>
        )
    }

    return (
        <Stage width={1024} height={638} options={{  backgroundAlpha: 0.6, }}>
            <Sprite
                image=".."
                scale={{ x: 0.5, y: 0.5 }}
                anchor={0.5}
                x={150}
                y={150}
            />
            <ReelsContainerWrapper />
        </Stage>
    )

}


