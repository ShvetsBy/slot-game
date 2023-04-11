import React, { FC, ReactNode } from 'react'
import './controlPanel.css'

interface ControlsWrapperProps {
    children: ReactNode;
  }

export const ControlsWrapper: FC<ControlsWrapperProps> = ({children}) => {
    return <div className='wrapper'>{children}</div>

}