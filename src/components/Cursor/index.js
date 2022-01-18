import { useEffect, useRef, useState } from "react"
import { TimelineLite } from "gsap"

import "./style.scss"

export const Cursor = ({  }) => {
    let [ position, setPosition ] = useState({ x: 0, y: 0 })
    let [ text, setText ] = useState("")
    let [ type, setType ] = useState("")

    let cursorRef = useRef()

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        })

        let hoverTextContents = document.querySelectorAll("[data-cursor-text]")
		
		hoverTextContents.forEach(item => {
			item.addEventListener("mouseenter", (e) => {
                setText(e.target.dataset.cursorText)
                setType("text")
			})

			item.addEventListener("mouseleave", (e) => {
                setText("")
                setType("")
			})
		})

        let hoverLinkContents = document.querySelectorAll("[data-cursor-link]")
		
		hoverLinkContents.forEach(item => {
			item.addEventListener("mouseenter", (e) => {
                setType("link")
			})

			item.addEventListener("mouseleave", (e) => {
                setType("")
			})
		})
    }, [])
    
    return (
        <div 
            ref={cursorRef}
            className={`Cursor ${type}`}
            style={{
                top: position.y,
                left: position.x,
            }}
        >
            <span>{text}</span>
        </div>
    )
}