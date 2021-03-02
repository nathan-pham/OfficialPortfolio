import Tilt from "react-tilt"

const Project = ({ name, time, type, scope, description, buttons, n }) => {
    return (
        <Tilt className={ `card ${n % 2 == 0 ? "dark" : "light"}` } options={{ scale: 1.01, max: 10 }}>
            <article className="flex align-stretch">
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
        </Tilt>
    )
}

export default Project