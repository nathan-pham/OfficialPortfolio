const Section = (props) => {
    return (
        <section>
            <div className="root-block">
                { props.children }
            </div>
        </section>
    )
}

export default Section