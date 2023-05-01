import { useApp } from '@pixi/react'
import React, { ReactNode } from 'react'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const app = useApp()
  return (
    <div className="game-wrapper" id="reels">
      {children}
    </div>
  )
}
