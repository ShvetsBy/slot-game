/* eslint-disable react/require-default-props */
import './controlPanel.css'

interface DataDisplayProps {
  title: string | number
  value?: number
  increase?: () => void
  decrease?: () => void
  disabledDecrease: boolean
  disabledIncrease: boolean
}

export function AdjustButtons({
  title,
  value,
  decrease,
  increase,
  disabledDecrease,
  disabledIncrease,
}: DataDisplayProps) {
  return (
    <div>
      <p className="data-title">{title}</p>
      <div className="button-wrapper">
        <button
          type="button"
          disabled={disabledDecrease}
          className="adjust-button"
          onClick={decrease}
        >
          -
        </button>
        <p className="data-value">{value}</p>
        <button
          type="button"
          disabled={disabledIncrease}
          className="adjust-button"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  )
}
