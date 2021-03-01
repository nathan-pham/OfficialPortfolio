import { useState, useEffect } from "react"

const Cursor = () => {
    const [ position, setPosition ] = useState({ x: 0, y: 0 })
    const [ expand, setExpand ] = useState(false)
    const [ hidden, setHidden ] = useState(false)
    const [ click, setClick ] = useState(false)

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners()
    }, [])

    const addEventListeners = () => {
        document.addEventListener("mousemove", mouseMove)
        document.addEventListener("mouseenter", mouseEnter)
        document.addEventListener("mouseleave", mouseLeave)
        document.addEventListener("mousedown", mouseDown)
        document.addEventListener("mouseup", mouseUp)
    }

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", mouseMove)
        document.removeEventListener("mouseenter", mouseEnter)
        document.removeEventListener("mouseleave", mouseLeave)
        document.removeEventListener("mousedown", mouseDown)
        document.removeEventListener("mouseup", mouseUp)
    }

    const mouseMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
        setExpand(e.target.closest('a'))
    }

    const mouseEnter = () => setHidden(false)
    const mouseLeave = () => setHidden(true)

    const mouseDown = () => setClick(true)
    const mouseUp = () => setClick(false)

    return (
        <div id="cursor" style={{ 
            left: `${position.x}px`,
            top: `${position.y}px`,
            opacity: hidden ? 0 : 1,
            height: `${expand ? 3.25: 2.5}rem`,
            width: `${expand ? 3.25 : 2.5}rem`,
            transform: `translate(-50%, -50%) scale(${ click ? 0.8 : 1 })`
         }}></div>
    )
}

export default Cursor