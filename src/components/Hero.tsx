import Navbar from "./Navbar"
import { heroArrow, tab1, tab2, tab3, tab4, } from "../assets"
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="w-full  bg-black text-center flex flex-col items-center">
        <Navbar />
        <div className="container flex flex-col mt-20 items-center ">
          <Fade direction={'up'} triggerOnce={true}>
            <h1 className="poppins text-white px-5 md:px-0 text-3xl md:text-[4rem] font-extrabold leading-[175%] md:leading-[135%]">Minimize your tabs.<br/>Find the trends!</h1>
          </Fade>

          <Fade direction={'up'} triggerOnce={true}>
            <p className="mt-8 max-w-xs md:max-w-full text-mainGray text-[17px] leading-[150%] ">Don’t let your computer memories consumes all of those browser tabs.<br/>Findtrend  let you gathers all of your favorite website into one place.</p>
          </Fade>

          <Fade direction={'up'} triggerOnce={true}>
            <div className="relative">
              <button className="bg-mainGreen mt-12 font-bold md:text-[17px]  px-7 py-4 md:px-9  rounded-full md:hover:bg-hoverGreen">Get Started &#128293;</button>
              <img src={heroArrow} alt="heroArrow" className="hidden md:block absolute bottom-0 -right-32"/>
            </div>
          </Fade>

          <div className="flex flex-col mt-20 max-w-xs ">
            <img src={tab1} alt="tab1" className="z-[5] -rotate-3"/>
            <img src={tab2} alt="tab2" className="z-[4] -mt-3 rotate-3"/>
            <img src={tab3} alt="tab3" className="z-[3] -mt-4 -rotate-3"/>
            <img src={tab4} alt="tab4" className="z-[2] -mt-3 rotate-3"/>
          </div>
        </div>
    </div>
  )
}

export default Hero