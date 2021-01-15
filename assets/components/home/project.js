const Project = ({ name, time, type, scope, description, buttons, n }) => {
    n += 1
    return (
        <article className={ `card flex align-stretch ${n % 2 == 0 ? "light" : "dark"}` } key={ n }>
            <div className="card-left">
                <img 
                    src={ `/images/logos/${ name.toLowerCase() }.png` } 
                    alt={ `${ name } Logo` }
                />
                <p>{ [ time, name, scope ].join(" · ") }</p>
                <h1 className="title-font">{ description }</h1>
                <div className="flex">
                    {
                        buttons.map((p, index) => <a href={ p.href } key={ index * n }>{ p.display }</a>)
                    }
                </div>
            </div>
            <div className="card-right flex align-center justify-center">
                <img 
                    className={ type == "desktop" ? "mac" : "iphone" } 
                    src={ `/images/mockups/${ name.toLowerCase() }.png` }    
                />
            </div>
        </article>
    )
}

export default Project