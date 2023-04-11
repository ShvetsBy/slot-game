import React, { FC } from "react";
import './controlPanel.css';
import Drum from '../../assets/img/drum.png'


export const Spin = () => {
    return (
        <div className="spin-wheel-wrapper">
           <img src={Drum} alt='spin wheel' className="spin-wheel"/>
        </div>
    )
}