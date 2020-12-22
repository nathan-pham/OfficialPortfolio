import "../assets/css/components.scss"
import "../assets/css/responsive.scss"
import "../assets/css/globals.scss"
import "../assets/css/flex.scss"
import "../assets/css/home.scss"

const App = ({ Component, pageProps }) => {
  return (
    <Component { ...pageProps } />
  )
}

export default App