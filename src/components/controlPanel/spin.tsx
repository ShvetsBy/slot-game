/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react'
import './controlPanel.css'
// eslint-disable-next-line import/no-extraneous-dependencies
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
