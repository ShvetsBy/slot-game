import React from 'react';
import './reels.css'
import { Application, Sprite } from 'pixi.js'
// import { cardsData } from '../../content/cards';
// import ACard from '../../assets/cards/a-card.png';
// import JCard from '../../assets/cards/j-card.png';
// import KCard from '../../assets/cards/k-card.png';
// import QCard from '../../assets/cards/q-card.png';
// import Flamingo from '../../assets/cards/flamingo-card.png';
// import Plane from '../../assets/cards/plane-card.png';
// import FreeSpins from '../../assets/cards/free-spins.png';
// import CatchMe from '../../assets/cards/catch-card.png';
// import Gun from '../../assets/cards/gun-card.png';
// import WalkieTalkie from '../../assets/cards/walkie-talkie.png';
// import Jerk from '../../assets/cards/jerk-card.png';
// import Girl from '../../assets/cards/girl-card.png';
// import WildCard from '../../assets/cards/wild-card.png';
// import WildFire from '../../assets/cards/wild-fire.png';


// const cardsImg = {
//     ACard, JCard, KCard, QCard, Flamingo, Plane, FreeSpins, CatchMe, Gun, WalkieTalkie, WildCard, WildFire, Jerk, Girl
// }

// export const Reels = () => {
//     const cards = cardsData.map((el) => <img src={cardsImg[el.name]} alt={el.name} key={el.id}/>)
//     return (<div className='reels-wrapper'>{cards}</div>)

// }

export const reels = () => {
    const app = new Application<HTMLCanvasElement>({ width: 720, height: 480 });
    const container = document.querySelector('#reels')!;
    console.log('[dq]');
    console.log(container);
    container.append(app.view);
    
    const symbol = Sprite.from('../../assets/cards/a-card.png');
    
    app.stage.addChild(symbol);
}

