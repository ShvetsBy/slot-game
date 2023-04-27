import React from 'react'
import './controlPanel.css'

interface DataDisplayProps {
  title: string
}

export function AdjustButtons({ title }: DataDisplayProps) {
  return (
    <div>
      <p className="data-title">{title}</p>
      <div className="button-wrapper">
        <button type="button" className="adjust-button">
          -
        </button>
        <p className="data-value">20</p>
        <button type="button" className="adjust-button">
          +
        </button>
      </div>
    </div>
  )
}
