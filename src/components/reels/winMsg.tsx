import React from 'react'
import { Text } from '@pixi/react'
import { TextStyle } from 'pixi.js'

type WinMsgProp = {
  text: string
}

export function WinMsg({ text }: WinMsgProp) {
  return (
    <Text
      text={text}
      anchor={0.5}
      x={360}
      y={200}
      style={
        new TextStyle({
          align: 'center',
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 50,
          fill: ['#ffffff', '#ffd700'],
          stroke: 'C97C5D',
          strokeThickness: 5,
          letterSpacing: 20,
          dropShadow: true,
          dropShadowColor: '8b6220',
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
          wordWrap: true,
          wordWrapWidth: 440,
        })
      }
    />
  )
}
