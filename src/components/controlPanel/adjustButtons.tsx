import React, { FC } from "react";
import './controlPanel.css'
interface dataDisplayProps {
    title: string;

  }

export const AdjustButtons:FC<dataDisplayProps> = ({ title }) => {
    return (
        <div>
            <p className="data-title">{title}</p>
            <div className="button-wrapper">
            <button className="adjust-button"> - </button>
            <p className="data-value">20</p>
            <button className="adjust-button"> + </button>
            </div>
         
        </div>
    )
}