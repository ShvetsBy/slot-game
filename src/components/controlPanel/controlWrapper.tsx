import React, { ReactNode } from 'react'
import './controlPanel.css'

interface ControlsWrapperProps {
  children: ReactNode
}

export function ControlsWrapper({ children }: ControlsWrapperProps) {
  return <div className="wrapper">{children}</div>
}
