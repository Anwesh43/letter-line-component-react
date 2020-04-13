import {useAnimatedScale, useDimension} from './hooks'
import React, {useEffect} from 'react'
import LetterLine from './LetterLine'

const btnStyle = (w, h) => {
    const position = 'absolute'
    const left = `${0.4 * w}px`
    const top = `${0.8 * h}px`
    const fontSize = `${Math.min(w, h) / 25}px`
    return {position, left, top, fontSize}
}


const LetterLinesComponent = ({word}) => {
    const {scale, start} = useAnimatedScale(0.1 / word.length, 30)
    const {w, h, resize, disableResizing} = useDimension()
    useEffect(() => {
        resize()
        return disableResizing
    })
    return (<div>
              {word.split("").map((letter, i) => <LetterLine w = {w} h = {h} scale = {scale} i = {i} word = {word}/>)}
              <button onClick = {start} style = {btnStyle(w, h)}>START</button>
          </div>)
}

export default LetterLinesComponent
