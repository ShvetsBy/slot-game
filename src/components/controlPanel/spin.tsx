/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import './controlPanel.css'
import { gsap } from 'gsap'

import { useSelector, useDispatch } from 'react-redux'
import rawDrum from '../../assets/img/drum-noborder.png'
import fireCircle from '../../assets/img/fire-rounded.png'
import { setIsSpinning } from '../state/bettingSlice'

export function Spin() {
  const isSpinning = useSelector((state) => state.isRunning)
  const dispatch = useDispatch()
  console.log(isSpinning)

  const clickHandler = () => {
    gsap.fromTo('#drum', { rotation: 0 }, { rotation: 360, repeat: 4, ease: 'none' })
    dispatch(setIsSpinning)
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      clickHandler()
    }
  })

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="spin-wheel-wrapper" onClick={clickHandler}>
      <img src={fireCircle} alt="spin wheel" className="spin-fire" />
      <img src={rawDrum} alt="spin wheel" className="spin-wheel" id="drum" />
    </div>
  )
}
