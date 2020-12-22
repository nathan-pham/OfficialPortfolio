const Social = ({ href, icon }) => {
    return (
        <a href={ href } target="_blank">
            <i className={ icon }></i>
        </a>
    )
}

export default Social