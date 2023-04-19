import React, { FC, ReactNode } from 'react'
import './gameWrapper.css'

interface GameWrapperProps {
    children: ReactNode;
  }

export const GameWrapper: FC<GameWrapperProps> = ({children}) => {
    return <div className='game-wrapper' id='reels'>{children}</div>

}