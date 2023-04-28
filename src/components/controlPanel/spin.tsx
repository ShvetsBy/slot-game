/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { KeyboardEventHandler } from 'react'
import './controlPanel.css'
import { gsap } from 'gsap'
import Drum from '../../assets/img/drum.png'

export function Spin() {
  const clickHandler = () => {
    gsap.fromTo('#drum', { rotation: 0 }, { rotation: 360, repeat: 4, ease: 'none' })
  }

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      clickHandler()
    }
  })

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className="spin-wheel-wrapper" onClick={clickHandler}>
      <img src={Drum} alt="spin wheel" className="spin-wheel" id="drum" />
    </div>
  )
}
