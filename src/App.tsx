import { Fragment } from "react"
import Hero from "./components/Hero"
import SubHero from "./components/SubHero";
import Partners from "./components/Partners";
import Prices from "./components/Prices";
import JoinUs from "./components/JoinUs";


const App = () => {


  return (
    <Fragment>
      <Hero />
      <Partners />
      <Prices />
      <JoinUs />
    </Fragment>
  )
}

export default App