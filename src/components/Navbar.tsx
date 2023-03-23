import { navbarLogo } from "../assets"
import { navbarLinks } from "../constants"
import { useState } from "react";
import { HamburgerBoring } from 'react-animated-burgers'
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="container  z-50 flex flex-row bg-black m-auto justify-center items-center">
  
        <div className="flex relative w-full flex-row justify-between items-center px-4 py-7 md:px-0">
            {/* Desktop Navbar Start */}
            <Fade direction="up" className="hidden md:inline"><a href="#" onClick={() => window.location.reload()}><img src={navbarLogo} alt="navbarLogo" /></a></Fade>
            
            <a href="#" onClick={() => window.location.reload()} className='md:hidden'><img src={navbarLogo} alt="navbarLogo" /></a>

            <ul className="hidden md:flex flex-row gap-10">
              {navbarLinks.map((link) => {
                return <Fade direction="up" delay={100} triggerOnce={false}><a href='#' key={link.id} className='text-white poppins text-[18px] hover:text-gray-300 hover:duration-75'>{link.title}</a></Fade>
              })}
            </ul>
            {/* Desktop Navbar End */}
            

            {/* Mobile Burger Start */}  
            <div className="md:hidden">
              <HamburgerBoring barColor='white' className="md:hidden p-0" buttonWidth={28} isActive={toggle}  toggleButton={() => setToggle(!toggle)}/> 
            </div>
            {/* Mobile Burger End */}  

            {/* Mobile Navbar Start */}
              <ul className={`absolute bg-black rounded-b-[5px] z-0 w-full flex flex-col right-0 left-0 items-center py-20 gap-10 ${toggle ? 'top-[97px] ' : '-top-[360px] -z-10'} duration-500 md:hidden`}>
                {navbarLinks.map((link) => {
                  return <a href='#' key={link.id} className='text-white poppins text-[18px]'>{link.title}</a>
                })}
              </ul>
            {/* Mobile Navbar End */}
        </div>
    </nav>
  )
}

export default Navbar