/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react'
import './controlPanel.css'
import { gsap } from 'gsap'

import { useAppDispatch } from '../state/hooks'
import rawDrum from '../../assets/img/drum-noborder.png'
import fireCircle from '../../assets/img/fire-rounded.png'
import { setIsSpinning } from '../state/bettingSlice'

export function Spin() {
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    gsap.fromTo('#drum', { rotation: 0 }, { rotation: 360, repeat: 3, ease: 'none' })
    dispatch(setIsSpinning())
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        const buttons: Element[] = Array.from(document.getElementsByClassName('adjust-button'))
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i] as HTMLButtonElement
          button.blur()
        }

        clickHandler()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="spin-wheel-wrapper" onClick={clickHandler}>
      <img src={fireCircle} alt="spin wheel" className="spin-fire" />
      <img src={rawDrum} alt="spin wheel" className="spin-wheel" id="drum" />
    </div>
  )
}
