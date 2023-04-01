import { useState } from "react"

import { Fade } from "react-awesome-reveal";
import Cards from "./Cards";
import PricesHead from "./PricesHead";

const Prices = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
  <div className="w-full bg-black flex justify-center">
    <div className="container flex flex-col items-center px-4 md:px-0 mt-20 md:mt-24  pb-28">

      <Fade direction={'up'} triggerOnce={true}>
        <h1 className="hidden md:block roboto text-white tracking-wide md:px-0 text-[2.125rem] md:text-[4rem] font-black  md:leading-[135%]">Get your best deal</h1>
      </Fade>

      <h1 className="md:hidden roboto text-white tracking-wide md:px-0 text-[2.125rem] md:text-[4rem] font-black  md:leading-[135%]">Get your best deal</h1>


      <Fade direction={'up'} triggerOnce={true}>
        <div className="hidden md:block">
          <PricesHead toggle={toggle} setToggle={setToggle}/>
        </div>
      </Fade>

      <div className="md:hidden">
        <PricesHead toggle={toggle} setToggle={setToggle}/>
      </div>

      <Fade direction={'up'} triggerOnce={true} className='w-full'>
        <div className="hidden md:block">
          <Cards toggle={toggle}/>
        </div>
      </Fade>

      <div className="md:hidden">
        <Cards toggle={toggle}/>
      </div>
      
    </div>
  </div>
  )
}

export default Prices