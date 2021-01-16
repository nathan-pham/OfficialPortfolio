import { useState } from "react"
import Header from "./document/header"
import Footer from "./document/footer"
import Seo from "./document/seo"
import next from "next"

const Root = ({ title, description, children, back_header, no_header, no_footer }) => {
    const rootName = `root-${ (title || "Home").toLowerCase() }`
    const [ style, setStyle ] = useState({ 
        top: "50%",
        left: "50%"
    })

    const moveCursor = (e) => {
        let nextStyle = {
            top: e.clientY,
            left: e.clientX
        }

        let possible = [
            e.target.tagName,
            e.target.parentNode.tagName
        ].map(v => v.toLowerCase())

         if(e.target.closest('a')) {
            Object.assign(nextStyle, {
                width: "4rem",
                height: "4rem"
            })
        }

        setStyle(nextStyle)
    }

    return (
        <>
            <Seo title={ title } description={ description } />
            <div id={ rootName } onMouseMove={ moveCursor } className="root">
                { no_header
                    ? <></>
                    : <Header type={ !back_header ? "default" : "back" } />
                }
                { children }
                { no_footer 
                    ? <></>
                    : <Footer />
                }
                <div id="cursor" style={ style }></div>
            </div>
        </>
    )
}

export default Root