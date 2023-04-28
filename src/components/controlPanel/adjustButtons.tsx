import React from 'react'
import './controlPanel.css'

interface DataDisplayProps {
  title: string | number
  value?: number
  increase?: any
  decrease?: any
}

export function AdjustButtons({ title, value, decrease, increase }: DataDisplayProps) {
  return (
    <div>
      <p className="data-title">{title}</p>
      <div className="button-wrapper">
        <button type="button" className="adjust-button" onClick={decrease}>
          -
        </button>
        <p className="data-value">{value}</p>
        <button type="button" className="adjust-button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  )
}
