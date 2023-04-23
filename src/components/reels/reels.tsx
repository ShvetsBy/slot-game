import React, {useEffect, useState}from 'react';
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
    const SPIN_TIME = 100;
   
    const [ isRunning, setIsRunning ] = useState(false);
    const [ reelData, setReelData ] = useState(cardsData);
    const [ allReelsData, setAllReelsData ] = useState<any[]>([]);

    const getShuffledPos = (arr) => {
        const shuffledArr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        return shuffledArr;
    }

    useEffect(()=>{
        const yPositions:Array<number> = [];
        
        for(let i = 0; i < reelData.length; i++ ){
            yPositions.push(i);
        }

        for(let i = 0; i < REELS_QUANTITY; i++){
            const shuffleYpos = getShuffledPos(yPositions);
            const reelDataWithY = [...reelData];
            reelDataWithY.map((el, i) => {
                el.y = shuffleYpos[i]}
            );
            setReelData(reelDataWithY);            
            setAllReelsData((prev) => [...prev, reelData])
        }
    },[]);

    const click = () => {
        const updatedReel = [...reelData]; 
        updatedReel.map((el) => {
            if(el.y < 13) {
                el.y += 1
            } else {el.y = 0}
          });
        setReelData(updatedReel)
      
       
    } 

    const ReelContainer = (props) => {
        const x = props.x;
        const data = props.data

        return(
            <Container width={SYMBOL_WIDTH} x={x}>
              {data.map((el) => 
               <Sprite
                image={cardsImg[el.name]}
                y={SYMBOL_HEIGHT * el.y}
                key={el.id}
                />
       ) }
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

        if(allReelsData.length){
            return(
                <>
                 {row.map((el, i) => 
                       <ReelContainer x={el.x} data={allReelsData[i]} key={i}/> )}
                </>
               )
        } else return null
       
    }

    const ReelsContainerWrapper = () => {
        return(
            <Container width={SYMBOL_WIDTH * REELS_QUANTITY} height={SYMBOL_HEIGHT * SYMBOLS_QUANTITY} x={152} y={5} >
                <ReelsContainer />
            </Container>
        )
    }

    return (
        <Stage width={1024} height={638} options={{  backgroundAlpha: 0.6, }} onClick={click}>
            <ReelsContainerWrapper />
        </Stage>
    )

}


