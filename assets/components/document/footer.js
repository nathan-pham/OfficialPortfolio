import Section from "./section"

const Footer = () => {
    return (
        <Section>
            <footer className="flex justify-between align-center">
            <span>© 2020 Nathan Pham</span>
            <span>
                <a href="mailto:nathanpham.me@gmail.com">
                    <i className="fas fa-paper-plane"></i>
                    nathanpham.me@gmail.com
                </a>
            </span>
            </footer>
        </Section>
    )
}

export default Footer