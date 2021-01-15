const Post = ({ url, cover_image, title, description }) => {
    return (
        <a href={ url } className="blog-post flex direction-column" key={ url }>
            <article>
                <img src={ cover_image } />
                <h2 className="big subtitle title-font">{ title }</h2>
                <p>{ description }</p>
            </article>    
        </a>
    )
}

export default Post