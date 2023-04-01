import { navbarLogo, logoFooter } from "../assets"
import { footerLinks } from "../constants"
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <nav className="container  bg-white md:bg-inherit text-center  flex flex-row  m-auto justify-center items-center">
  
        <div className="  flex w-full bg-white md:bg-inherit flex-col md:flex-row justify-between items-center px-5 py-7 md:px-0 mt-20 md:mt-0 ">
            {/* Desktop Navbar Start */}
            <Fade direction="up" triggerOnce={true} className="hidden md:inline"><a href="#" onClick={() => window.location.reload()}><img src={logoFooter} alt="logoFooter" /></a></Fade>
            
            <a href="#" onClick={() => window.location.reload()} className='md:hidden'><img src={logoFooter} alt="navbarLogo" /></a>

            <Fade direction="up"  damping={0.1} cascade={true} triggerOnce={true}>
              <ul className="hidden md:flex flex-row gap-10">
                {footerLinks.map((link) => {
                    return <a href='#' key={link.id} className='text-black roboto text-[18px]'>{link.title}</a>
                })}
              </ul>
            </Fade>

            <ul className="md:hidden flex flex-col gap-10 mt-20 mb-20">
                {footerLinks.map((link) => {
                    return <a href='#' key={link.id} className='text-black roboto text-[18px]'>{link.title}</a>
                })}
              </ul>
            {/* Desktop Navbar End */}
            

           
          
        </div>
    </nav>
  )
}

export default Footer