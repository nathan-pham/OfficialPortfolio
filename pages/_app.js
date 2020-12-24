import "../assets/styles/components/document/section.scss"
import "../assets/styles/components/document/header.scss"
import "../assets/styles/components/document/footer.scss"
import "../assets/styles/globals.scss"
import "../assets/styles/layout.scss"
import "../assets/styles/home.scss"

const App = ({ Component, pageProps }) => {
  return (
    <Component { ...pageProps } />
  )
}

export default App