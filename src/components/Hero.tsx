import Navbar from "./Navbar"
import { heroArrow, tab1, tab2, tab3, tab4 } from "../assets"
import { Fade } from "react-awesome-reveal";
import SubHero from "./SubHero";
import { useState } from "react";
import { Scrollama, Step } from 'react-scrollama';
import Partners from "./Partners";

const Hero = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  const [rectMoving, setRectMoving] = useState(false);

  const handleStepEnter1 = () => {
    setRectMoving(false);
    console.log('up')
  };


  const handleStepEnter2 = () => {
    setRectMoving(true);
    console.log('down')
  };

  return (
    <div className="w-full bg-black text-center flex flex-col items-center overflow-hidden">
        
        <div className="container z-20 flex flex-col items-center  backgroundOrnament ">
          <Navbar />

          <Fade direction={'up'} triggerOnce={true}>
          <Scrollama onStepEnter={handleStepEnter1} >
            <Step>
              <h1 className="roboto text-white mt-20 px-4 md:px-0 text-[2rem] md:text-[4.125rem] font-black leading-[175%] md:leading-[135%]">Minimize your tabs.<br/>Find the trends!</h1>
            </Step>
          </Scrollama>
          </Fade>

          <Fade direction={'up'} triggerOnce={true}>
            <p className="roboto mt-8 max-w-xs md:max-w-full text-mainGray text-[17px] leading-[150%] ">Don’t let your computer memories consumes all of those browser tabs.<br/> Findtrend  let you gathers all of your favorite website into one place.</p>
          </Fade>

          <Fade direction={'up'} triggerOnce={true}>
            <div className="relative">
              <button className="bg-mainGreen mt-12 font-bold md:text-[17px]  px-7 py-4 md:px-9  rounded-full md:hover:bg-hoverGreen">Get Started &#128293;</button>
              <img src={heroArrow} alt="heroArrow" className="hidden md:block absolute bottom-0 -right-32"/>
            </div>
          </Fade>

          <div className="flex flex-col items-center w-full mt-20 max-w-xs lg:flex-row md:justify-center lg:min-w-[1080px] md:mt-32 mb-24 lg:mb-44">

          <Scrollama onStepEnter={handleStepEnter2} offset={0.2}>
            <Step>
              <img src={tab4} alt="tab4" className={`z-[5] -rotate-3 ${rectMoving  ? 'element1' : 'element11'} lg:relative lg:max-w-[350px] lg:max-h-[100px] lg:left-44 lg:bottom-8`}/>
            </Step>

            <Step>
              <img src={tab3} alt="tab3" className={`z-[4] -mt-3 rotate-3 ${rectMoving  ? 'element2' : 'element22'} lg:relative lg:max-w-[350px] lg:max-h-[100px] lg:top-12 lg:left-4`}/>
            </Step>

            <Step>
              <img src={tab2} alt="tab2" className={`z-[3] -mt-4 -rotate-3 ${rectMoving  ? 'element3' : 'element33'} lg:relative lg:max-w-[350px] lg:max-h-[100px] lg:right-16`}/>
            </Step>

            <Step>
              <img src={tab1} alt="tab1" className={`z-[2] -mt-3 rotate-3 ${rectMoving  ? 'element4' : 'element44'} lg:relative lg:max-w-[350px] lg:max-h-[100px] lg:right-40 lg:top-10`}/>
            </Step>
          </Scrollama>

          </div> 
        </div>
        <SubHero />
        <Partners />
    </div>
  )
}

export default Hero