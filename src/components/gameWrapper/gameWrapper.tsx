import React, { ReactNode } from 'react';
import './gameWrapper.css';

interface GameWrapperProps {
  children: ReactNode;
}

export function GameWrapper({ children }: GameWrapperProps) {
  return <div className="game-wrapper" id="reels">{children}</div>;
}
