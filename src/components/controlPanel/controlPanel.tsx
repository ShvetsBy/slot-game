import React, { FC } from "react";
import { ControlsWrapper } from "./controlWrapper";
import { DataDisplay } from "./dataDisplay";
import { AdjustButtons } from "./adjustButtons";
import { Spin } from './spin'


export const ControlPanel = () => {
    return (
        <ControlsWrapper>
           <DataDisplay title="Bet" data='200'/>
           <AdjustButtons title='Level'/>
           <Spin />
           <AdjustButtons title='Coin Value'/>
           <DataDisplay title="Coins" data='50000'/>
        </ControlsWrapper>
    )
}