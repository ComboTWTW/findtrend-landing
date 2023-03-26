import { tab5, solutionArrow, needArrow, solutionArrowMobile, needArrowMobile } from "../assets"

const SubHero = () => {
  return (
    <div className="bg-mainGreen w-full flex  justify-center">
        <div className="container flex flex-col items-center px-4 md:px-0 mt-20  mb-20">
            <h1 className="roboto text-black  md:px-0 text-[2rem] md:text-[4rem] font-bold md:leading-[135%]">Open new tabs is sh*t</h1>
            <div className="bg-white max-w-xs md:max-w-none relative rounded-[1rem] mt-[90px] md:mt-16 md:px-20 p-6 md:py-16">
                <img src={tab5} alt="tab5" id='tab5' className="md:max-w-[350px] md:max-h-[100px]" />
                <img src={solutionArrow} alt="solutionArrow" className="absolute hidden md:block -left-32 top-16"/>
                <img src={needArrow} alt="needArrow" className="absolute hidden md:block -right-32 top-16"/>
                <img src={solutionArrowMobile} alt="solutionArrow" className="absolute -rotate-3 md:hidden left-0 top-24"/>
                <img src={needArrowMobile} alt="needArrow" className="absolute md:hidden  right-0 bottom-24"/>
            </div>
            <p className="roboto px-4 md:px-0  max-w-xs md:max-w-full text-black font-normal leading-[150%] text-[16px] md:text-[17px] mt-[90px] md:mt-16">A solution for your browser tabs and don’t make your device get slower over time.<br className="hidden md:inline"/> Get ease and faster to discover a trend with just one tab.</p>
        </div>
    </div>
  )
}

export default SubHero