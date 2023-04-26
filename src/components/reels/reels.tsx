import React, {useEffect, useRef, useState}from 'react';
import './reels.css'
import {  Stage,
    PixiComponent,
    Container,
    AnimatedSprite,
    useApp,
    useTick, 
    Sprite,
    Text,
    AppProvider } from '@pixi/react';
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
import { TextStyle } from 'pixi.js';


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
    const [ reelData, setReelData ] = useState<any[]>(cardsData); 
    const [ allReelData, setAllReelData ] = useState<any[]>([]); 
    const [ hasWinner, setHasWinner ] = useState(false); 
    const [winMsg, setWinMsg ] = useState('You win!!!')

    const getShuffled = (arr) => {
        const shuffledArr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
        return shuffledArr;
    }

    const generateYPos = (number: number) => {
        return [...Array(number).keys()]
    }
    
    useEffect(()=>{    
        for(let i = 0; i < REELS_QUANTITY; i++){
            const reelDataWithY = reelData.map((el) => ({...el}));
            const yPositions:Array<number> = getShuffled(generateYPos(reelData.length));
            reelDataWithY.map((el, i) => {
                el.y = yPositions[i]}
            );
            setAllReelData((prev) => [...prev, reelDataWithY])
            
        }
        
    },[]);

    const reelRotation = (reelIndex) => {
            const reel = [... allReelData[reelIndex]] 
            reel.map((e) => {
                    if(e.y < 13) {
                        e.y += 1
                    } else {e.y = 0}
              });
              setReelData(reel);
      
    }

    const getRandom = (min, max)  => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
      }

    const spin = (position, times) => {
        for(let i = 0; i < times; i++) {
            reelRotation(position);
        }
    }

    const click = () => {
        spin(0, 100 + getRandom(1, 50))
        spin(1, 200 + getRandom(1, 50))
        spin(2, 300 + getRandom(1, 50))
        spin(3, 400 + getRandom(1, 50))
        spin(4, 500 + getRandom(1, 50))
        const currentReelsState = allReelData.forEach(
            (el) => el.filter((item) => item.y <=2 )
        )

        const result = () => {
            const result: any[] = [];
            for (let i = 0; i < allReelData.length; i++) {
                const temp = allReelData[i].filter(item => item.y <= 2)
                result.push(temp)
            }
            return result;
        }

        const findInArray = (array, item, index, result) => {
            let currentIndex = index;
            const matchItem = array[currentIndex].find((el) => el.name === item.name);
            if(matchItem){
                result.push(matchItem);
                currentIndex += 1;
                if (currentIndex <= result.length) {
                    findInArray(array, item, currentIndex, result)
                }
            }
         
        }

        const checkWin = () => {
            const results = result();
            const winline: any[] = [];
            const itemsToCheck = results.splice(0,1).flat();
            itemsToCheck.forEach((el) => {
                const temp: any[] = [];
                temp.push(el);
                findInArray(results, el, 0, temp);
                if (temp.length > 2) {
                    winline.push(temp)
                }
                
                
            });
           if(winline.length) setHasWinner(true);
            //console.log(winline)
        }

        checkWin();
       
    } 

    const ReelContainer = (props) => {
        const x = props.x;
        const data = props.data;
        return(
            <Container width={SYMBOL_WIDTH} x={x}>
              {data.map((el: { name: string | number; y: number; id: React.Key | null | undefined; }) => 
               <Sprite
                image={cardsImg[el.name]}
                y={SYMBOL_HEIGHT * el.y}
                key={el.id}
                // tint={hasWinner ? 'black' : 0xFFFFFF}
                />
       ) }
            </Container>
        )
    }

    const WinMsg = ({text}) => {

        return(
            <Text
            text={text}
            anchor={0.5}
            x={360}
            y={200}
            style={
              new TextStyle({
                align: 'center',
                fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                fontSize: 50,
                fill: ['#ffffff', '#ffd700'], // gradient
                stroke: 'C97C5D',
                strokeThickness: 5,
                letterSpacing: 20,
                dropShadow: true,
                dropShadowColor: '8b6220',
                dropShadowBlur: 4,
                dropShadowAngle: Math.PI / 6,
                dropShadowDistance: 6,
                wordWrap: true,
                wordWrapWidth: 440,
              })
            }
          />
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
 
        if(allReelData.length){
            return(
                <>
                 {row.map((el, i) => 
                       <ReelContainer x={el.x} data={allReelData[i]} key={i}/> )}
                 {hasWinner && <WinMsg text={winMsg}/>}
                </>
               )
        } else return null
       
    }

    const ReelsContainerWrapper = () => {
        return(
            <Container width={SYMBOL_WIDTH * REELS_QUANTITY} height={SYMBOL_HEIGHT * SYMBOLS_QUANTITY} x={152} y={30} >
                <ReelsContainer />
            </Container>
        )
    }

    return (

        <Stage width={1024} height={638} options={{  backgroundAlpha: 0.6 }} onClick={click}>
            <ReelsContainerWrapper />
        </Stage>

    )

}


