import Root from "../assets/components/root"

const Error = () => {
    return (
        <Root title="Error" no_header={ true } no_footer={ true }>
            <main className="flex align-center justify-center error-wrapper">
                <div className="error-content">
                    <h1 className="big title">¯\_(ツ)_/¯</h1>
                    <h2 className="big title title-font">Nothing here</h2>
                    <p>Well I don't see anything. Let's head back home.</p>
                    <a href="/" className="title-font">
                        <i className="fas fa-arrow-left"></i>
                        Go Back
                    </a>
                </div>
            </main>
        </Root>
    )
}

export default Error