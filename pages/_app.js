import "../assets/styles/components/document/section.scss"
import "../assets/styles/components/document/header.scss"
import "../assets/styles/components/document/footer.scss"
import "../assets/styles/pages/about.scss"
import "../assets/styles/pages/home.scss"
import "../assets/styles/pages/404.scss"
import "../assets/styles/globals.scss"
import "../assets/styles/layout.scss"
import "../assets/styles/theme.scss"

const App = ({ Component, pageProps }) => {
  return (
    <Component { ...pageProps } />
  )
}

export default App