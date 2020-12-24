import Link from "next/link"
import Section from "./section"

const Header = ({ type }) => {
    return (
        <Section>
            <header className="nav-header">
                <nav className="nav-links">
                    {
                        type == "default"
                            ? (
                                <>
                                    <Link href="/">
                                        <a className="active">Work</a>
                                    </Link>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </>
                            )
                            : (
                                <Link href="/">
                                    <a>Back</a>
                                </Link>
                            )
                    }
                    
                </nav>
            </header>
        </Section>
    )
}

export default Header