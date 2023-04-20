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








export const Reels = () => {
    const SYMBOL_WIDTH = 144;
    const SYMBOL_HEIGHT = 196;
    const REELS_QUANTITY = 5;
    const SYMBOLS_QUANTITY = 3;

    const ReelContainer = (props) => {
        const x = props.x;

        return(
            <Container width={SYMBOL_WIDTH} x={x}>
               {cardsData.map((el, i) => 
                <Sprite
                image={cardsImg[el.name]}
                y={i * SYMBOL_HEIGHT }
                />) }
            </Container>
        )
 
    }

    const ReelsContainer = () => {
        return(
            <Container width={SYMBOL_WIDTH * REELS_QUANTITY} height={SYMBOL_HEIGHT * SYMBOLS_QUANTITY} x={152} y={25}>
                    <ReelContainer x={0} />
                    <ReelContainer x={144}/>
                    <ReelContainer x={288}/>
                    <ReelContainer x={432}/>
                    <ReelContainer x={576}/> 
            </Container>
        )
 
    }

    return (
        <Stage width={1024} height={638}>
            <ReelsContainer />
        </Stage>
    )

}


