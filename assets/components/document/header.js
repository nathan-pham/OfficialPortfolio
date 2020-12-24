import { useRouter } from "next/router"
import Link from "next/link"
import Section from "./section"


const DefaultLink = () => {
    const router = useRouter()

    return (
        <>
            <Link href="/">
                <a className={ router.pathname == "/" ? "active" : "" }>Work</a>
            </Link>
            <Link href="/about">
                <a className={ router.pathname == "/about" ? "active" : "" }>About</a>
            </Link>
        </>
    )
}

const BackLink = () => {
    return (
        <Link href="/">
            <a>Back</a>
        </Link>
    )
}

const Header = ({ type }) => {
    return (
        <Section>
            <header className="nav-header">
                <nav className="nav-links">
                    {
                        type == "default"
                            ? <DefaultLink />
                            : <BackLink />
                    }
                    
                </nav>
            </header>
        </Section>
    )
}

export default Header