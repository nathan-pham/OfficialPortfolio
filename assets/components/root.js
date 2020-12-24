import Header from "./document/header"
import Footer from "./document/footer"
import Seo from "./document/seo"

const Root = ({ title, description, children, header }) => {
    const rootName = `root-${ (title || "Home").toLowerCase() }`
    return (
        <>
            <Seo title={ title } description={ description } />
            <div id={ rootName } className="root">
                <Header type={ !header ? "default" : "back" } />
                { children }
                <Footer />
            </div>
        </>
    )
}

export default Root