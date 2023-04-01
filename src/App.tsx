import { Fragment } from "react"
import Hero from "./components/Hero"
import SubHero from "./components/SubHero";
import Partners from "./components/Partners";
import Prices from "./components/Prices";


const App = () => {


  return (
    <Fragment>
      <Hero />
      <Partners />
      <Prices />
    </Fragment>
  )
}

export default App