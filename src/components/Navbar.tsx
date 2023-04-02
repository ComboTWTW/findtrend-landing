import { navbarLogo } from "../assets"
import { navbarLinks } from "../constants"
import { useState } from "react";
import { HamburgerBoring } from 'react-animated-burgers'
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="container backgroundOrnament  bg-black md:bg-inherit   flex flex-row  m-auto justify-center items-center">
        <div className="  flex w-full bg-black backgroundOrnamentNav md:bg-inherit flex-row   z-[11] justify-between items-center px-5 py-7 md:px-0">
          {/* Desktop Navbar Start */}
          <Fade direction="up" triggerOnce={true} className="hidden md:inline"><a href="#" onClick={() => window.location.reload()}><img src={navbarLogo} alt="navbarLogo" /></a></Fade>
          {/* Logo for Mobile (Without Animation)*/}
          <a href="#" onClick={() => window.location.reload()} className='md:hidden'><img src={navbarLogo} alt="navbarLogo" /></a>

          {/* Desktop Navbar Start */}
          <Fade direction="up" damping={0.1} cascade={true} triggerOnce={true}>
            <ul className="hidden md:flex flex-row gap-10">
              {navbarLinks.map((link) => {
                return <a href='#' key={link.id} className='text-white roboto text-[18px] hover:text-gray-300 hover:duration-75'>{link.title}</a>
              })}
            </ul>
          </Fade>
          {/* Desktop Navbar End */}
            

          {/* Mobile Burger Start */}  
          <div className="md:hidden">
            <HamburgerBoring barColor='white' className="md:hidden p-0" buttonWidth={28} isActive={toggle}  toggleButton={() => setToggle(!toggle)}/> 
          </div>
          {/* Mobile Burger End */}  
        </div>

        {/* Mobile Navbar Start */}
        <ul className={`absolute bg-[#000] rounded-b-[5px] z-10 w-full flex flex-col right-0 left-0 items-center py-20 gap-10 ${toggle ? 'top-[97px]' : '-top-[360px] '} duration-500 md:hidden`}>
          {navbarLinks.map((link) => {
            return <a href='#' key={link.id} className='text-white roboto text-[18px]'>{link.title}</a>
          })}
        </ul>
        {/* Mobile Navbar End */}

    </nav>
  )
}

export default Navbar