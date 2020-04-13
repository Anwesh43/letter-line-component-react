import React from 'react'
import {divideScale, sinify} from './utils'

const hFactor = 3
const color = '#3F51B5'
const strokeWidth = 90
const tw = 0.6
const widthFactor = 0.7

const commonStyle = (w, h, gap, i, scale) => {
    const position = 'absolute'
    const y = (h / hFactor) * scale
    const x = gap * i
    return {position, y, x}
}

const letterStyle = (w, h, gap, i, scale) => {
    const {position, x, y} = commonStyle(w, h, gap, i, scale)
    const fontSize = `${gap * tw}px`
    const top = `${y}px`
    const left = `${x}px`
    return {position, color, top, left, fontSize}
}

const lineStyle = (w, h, gap, i, scale) => {
    const {position, x, y} = commonStyle(w, h, gap, i, scale)
    const width = `${Math.min(w, h) / strokeWidth}px`
    const height = `${y  + gap * 0.2 * scale}px`
    const top = `0px`
    const left = `${x + gap * (0.2)}px`
    const background = color
    return {position, top, left, width, height, background}
}

const LetterLine = ({w, h, scale, i, word}) => {
    const n = word.length
    const sf = divideScale(sinify(scale), i, n)
    const gap = (w * widthFactor) / n
    return (<div>
              <div style = {lineStyle(w, h, gap, i, sf)}/>
              <div style = {letterStyle(w, h, gap, i, sf)}>{word.charAt(i)}</div>
          </div>)
}

export default LetterLine
