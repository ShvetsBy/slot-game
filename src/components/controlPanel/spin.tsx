/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { KeyboardEventHandler } from 'react'
import './controlPanel.css'
import { gsap } from 'gsap'
import Drum from '../../assets/img/drum.png'
import rawDrum from '../../assets/img/drum-noborder.png'
import fireCircle from '../../assets/img/fire-rounded.png'

export function Spin() {
  const clickHandler = () => {
    gsap.fromTo('#drum', { rotation: 0 }, { rotation: 360, repeat: 4, ease: 'none' })
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      clickHandler()
    }
  })

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="spin-wheel-wrapper" onClick={clickHandler}>
      {/* <img src={Drum} alt="spin wheel" className="spin-wheel" id="drum" /> */}
      <img src={fireCircle} alt="spin wheel" className="spin-fire" />
      <img src={rawDrum} alt="spin wheel" className="spin-wheel" id="drum" />
    </div>
  )
}
