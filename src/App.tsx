import { Fragment } from "react"
import Hero from "./components/Hero"
import Partners from "./components/Partners";
import Prices from "./components/Prices";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";


const App = () => {

  return (
    <Fragment>
      <Hero />
      <Partners />
      <Prices />
      <JoinUs />
      <Footer />
    </Fragment>
  )
}

export default App