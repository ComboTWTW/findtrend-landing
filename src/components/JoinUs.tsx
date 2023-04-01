import { Fade } from "react-awesome-reveal";

const JoinUs = () => {
  return (
    <div className="w-full bg-mainGreen text-center flex justify-center">
        <div className="container flex flex-col py-20 md:py-32 justify-center items-center">
            <Fade direction={'up'} triggerOnce={true}><h1 className="hidden md:block roboto text-black px-2 md:px-0 text-[2.125rem] md:text-7xl font-black leading-[135%] md:leading-[135%]">Join us on email for<br/><span className="text-[#87d322]">more trending topics</span></h1></Fade>
            <Fade direction={'up'} triggerOnce={true}><button className={`hidden md:block priceButton mt-8 self-center roboto font-medium tracking-wider py-[13px] px-[50px] text-white bg-black rounded-full md:hover:bg-[#2b2b2b]`}>Join Now</button></Fade>

            <h1 className="md:hidden roboto text-black px-2 md:px-0 text-[2.125rem] md:text-7xl font-black leading-[135%] md:leading-[135%]">Join us on email for<br/><span className="text-[#87d322]">more trending topics</span></h1>
            <button className={`md:hidden priceButton mt-8 self-center roboto font-medium tracking-wider py-[13px] px-[50px] text-white bg-black rounded-full md:hover:bg-[#2b2b2b]`}>Join Now</button>
        </div>
    </div>
  )
}

export default JoinUs