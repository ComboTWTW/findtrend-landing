import Switch from "react-switch"
import { saveArrow, saveArrowMB } from '../assets/index'

interface Props {
    toggle: boolean;
    setToggle: any;
}

const PricesHead = ({toggle, setToggle}:Props) => {
  return (
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
        <div className="md:hidden block"><Switch 
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
        <img src={saveArrow} alt="saveArrow" className="hidden md:inline-block absolute -right-28 -top-2"/>
        <img src={saveArrowMB} alt="saveArrow-mobile" className="md:hidden absolute  left-44 -bottom-16"/>
    </div>
  )
}

export default PricesHead