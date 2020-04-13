import {useState} from './hooks'

export const useAnimatedScale = (n, scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    return {
        scale,
        i,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    return {
        w,
        h,
        resize() {
            window.onresize = () => {
                setW(window.innerWidth)
                setH(window.innerHeight)
            }
        },
        disableResizing() {
            window.onresize = () => {

            }
        }
    }
}
