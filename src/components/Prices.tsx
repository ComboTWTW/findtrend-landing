import Switch from "react-switch"
import { cards } from "../constants"
import { useState } from "react"
import { saveArrow, mark } from '../assets/index'

const Prices = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="w-full bg-black flex justify-center">
        <div className="container flex flex-col items-center px-4 md:px-0 mt-20 md:mt-24  pb-24">
            <h1 className="roboto text-white tracking-wide md:px-0 text-[2.125rem] md:text-[4rem] font-black  md:leading-[135%]">Get your best deal</h1>
            <div className="flex flex-row items-center relative gap-5 mt-8">
                <p className={`roboto font-medium  text-xl md:text-2xl text-${toggle ? 'lightGray' : 'white'}`}>Monthly</p>
                <div className="hidden md:block"><Switch 
                checked={toggle} 
                onChange={() => setToggle(!toggle)}
                offColor={'#fff'}
                offHandleColor={'#A8FF35'}
                onColor={'#A8FF35'}
                onHandleColor={'#fff'}
                uncheckedIcon={false}
                checkedIcon={false}
                height={50}
                width={110}
                handleDiameter={32}
                /></div>
                <div className="md:hidden"><Switch 
                checked={toggle} 
                onChange={() => setToggle(!toggle)}
                offColor={'#fff'}
                offHandleColor={'#A8FF35'}
                onColor={'#A8FF35'}
                onHandleColor={'#fff'}
                uncheckedIcon={false}
                checkedIcon={false}
                height={40}
                width={85}
                handleDiameter={28}
                /></div>
                <p className={`roboto font-medium text-xl md:text-2xl text-${toggle ? 'white' : 'lightGray'}`}>Yearly</p>
            </div>

            <div className="flex w-full flex-col md:flex-row sm: gap-8 md:gap-2 lg:gap-8 mt-8">
              {cards.map((card) => {
                return <div id={card.id} className={`${card.id === 'regular' ? 'bg-mainGreen' : 'bg-white'} flex min-h-[635px] text-left lg:w-full flex-col justify-between px-7 py-7 rounded-[16px]`}>
                  <div className="flex flex-col"><h3 className="roboto text-3xl font-black">{card.header}</h3>
                  <h4 className="roboto text-black mt-2">{card.subHeader}</h4>
                  <div className={`w-full h-[1px] ${card.id === 'regular' ? 'bg-[#87cc2a]' : 'bg-[#ccc]'} mt-6`}></div>
                  <p className="roboto text-[3.25rem] text-black font-black mt-6">{toggle ? card.priceLow : card.price} <span className="roboto text-base text-black font-medium">/Month</span></p>
                  <ul className="flex flex-col items-start gap-4 mt-6">
                    {card.list.map((item) => {
                      return <li className="roboto text-black"><img src={mark} alt="mark" className="inline mr-2 mb-1"/>{item}</li>
                    })}
                  </ul></div>
                  <button className={`w-full md:mt-4 lg:mt-0 justify-self-end roboto font-bold py-[15px]  rounded-full ${card.id === 'regular' ? 'bg-black text-white font-medium hover:bg-' : 'bg-mainGreen text-black hover:bg-'}`}>Start Free Trial</button>
                </div>
              })}
            </div>
        </div>
    </div>
  )
}

export default Prices