import { cards } from "../constants"
import { mark } from '../assets/index'

interface Props {
    toggle: boolean;
}

const Cards = ({toggle}:Props) => {
  return (
    <div className="flex w-full flex-col md:flex-row sm: gap-8 md:gap-2 lg:gap-8 mt-20 md:mt-8">
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
            <button className={`priceButton w-full md:mt-4 lg:mt-0  self-center roboto font-bold py-[15px]  rounded-full ${card.id === 'regular' ? 'bg-black text-white font-medium hover:bg-[#2b2b2b]' : 'bg-mainGreen text-black hover:bg-[#87D322]'}`}>Start Free Trial</button>
        </div>
        })}
    </div>
  )
}

export default Cards