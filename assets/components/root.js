import Seo from "./seo"
import Header from "./header"
import Section from "./section"

const Root = (props) => {
    const rootName = `root-${ (props.title || "Home").toLowerCase() }`
    return (
        <>
            <Seo title={ props.title } description={ props.description } />
            <div id={ rootName } className="root">
                <Section>
                    <Header type={ props.header || "default" } />
                </Section>
                { props.children }
            </div>
        </>
    )
}

export default Root