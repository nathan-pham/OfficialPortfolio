import Header from "./document/header"
import Footer from "./document/footer"
import Seo from "./document/seo"
import Cursor from "./cursor"

const Root = ({ title, description, children, back_header, no_header, no_footer }) => {
    const rootName = `root-${ (title || "Home").toLowerCase() }`

    return (
        <>
            <Seo title={ title } description={ description } />
            <div id={ rootName } className="root">
                { no_header
                    ? <></>
                    : <Header type={ !back_header ? "default" : "back" } />
                }
                { children }
                { no_footer 
                    ? <></>
                    : <Footer />
                }
                <Cursor />
            </div>
        </>
    )
}

export default Root