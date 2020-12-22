import Link from "next/link"

const Header = ({ type }) => {
    return (
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
    )
}

export default Header